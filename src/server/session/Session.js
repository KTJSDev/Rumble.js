import { MessageQueue } from '../messaging/MessageQueue.js'
import { LogicHyperionMessageFactory } from '../../logic/message/LogicHyperionMessageFactory.js'
import { RC4Encrypter } from "../../titan/security/encryption/RC4Encrypter.js"
import { MessageManager } from "../messaging/MessageManager.js"

export class Session {
    constructor(socket) {
        this.socket = socket
        this.queue = new MessageQueue()
        this.receiveEncrypter = new RC4Encrypter("FROGMINDTODO", "nonce")
        this.sendEncrypter = new RC4Encrypter("FROGMINDTODO", "nonce")
        this.messageManager = new MessageManager(this)
    }

    /*
    ** tbh, i'm lazy to implement messaging similar to original game.
    */

    init() {
        this.socket.on('data', (data) => {
            this.queue.push(data)

            while(this.queue.pendingJob()) {
                const buffer = this.queue.get()

                const length = buffer.readUIntBE(2, 3);
                const type = buffer.readUInt16BE(0);
                const version = buffer.readUInt16BE(5);
                const encryptedBytes = buffer.slice(7, 7 + length);
                this.queue.release(length + 7);

                const decryptedBytes = this.receiveEncrypter.decrypt(encryptedBytes);

                const message = LogicHyperionMessageFactory.createMessageByType(type)

                if (!message) {
                    console.log(`Unknown message type:`, type)
                    return;
                }

                message.stream.setByteArray(decryptedBytes)
                message.decode()

                console.log("Received message with type:", message.getMessageType())

                this.messageManager.receiveMessage(message)
            }
        })

        this.socket.on('end', () => {
            console.log("Client disconnected")
        })

        this.socket.on('error', async error => {
            try {
            console.log('A wild error!')
            console.error(error)
            this.socket.destroy()
            } catch (e) { }
        })
    }

    sendMessage(message) {
        if (message.stream.getLength() === 0)
            message.encode()

        const header = Buffer.alloc(7)
        const buffer = this.sendEncrypter.encrypt(message.stream.buffer)

        header.writeUInt16BE(message.getMessageType(), 0)
        header.writeUIntBE(buffer.length, 2, 3)
        header.writeUInt16BE(0, 5)

        this.socket.write(Buffer.concat([header, buffer]))
        console.log("Sent message with type", message.getMessageType())
    }
}