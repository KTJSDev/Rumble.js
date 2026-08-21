import { LoginOkMessage } from "../../logic/message/auth/LoginOkMessage.js";
import { OwnHomeDataMessage } from "../../logic/message/home/OwnHomeDataMessage.js";
import { KeepAliveOkMessage } from "../../logic/message/auth/KeepAliveOkMessage.js";
import { LogicLong } from "../../titan/logic/LogicLong.js";
import { LogicCommandFactory } from "../../logic/command/LogicCommandFactory.js";
import { ByteStream } from "../../titan/stream/ByteStream.js";

export class MessageManager {
    constructor(session) {
        this.session = session
    }

    receiveMessage(message) {
        switch(message.getMessageType()) {
            case 10101:
                this.onLoginReceived(message); break;
            case 10108:
                this.onKeepAliveReceived(message); break;
            case 14102:
                this.onEndClientTurnReceived(message); break;
        }
    }

    sendMessage(message) {
        this.session.sendMessage(message)
    }

    onLoginReceived(message) {
        const loginOk = new LoginOkMessage()
        loginOk.lowId = message.id.isZero() ? new LogicLong(0, 1) : message.id
        loginOk.passToken = message.passToken.length === 0 ? "KTJSENTHUSIAST" : message.passToken

        const home = new OwnHomeDataMessage()

        this.sendMessage(loginOk)
        this.sendMessage(home)
    }

    onKeepAliveReceived(message) {
        this.sendMessage(new KeepAliveOkMessage())
    }

    onEndClientTurnReceived(message) {
        for (const rawCommand of message.commands) {
            const command = LogicCommandFactory.createCommandByType(rawCommand.commandType)
            const commandStream = new ByteStream(rawCommand.bytes)

            if (command.getCommandType() === 0) {
                console.warn("Unknown command with type", rawCommand.commandType, "received!")
            }

            command.decode(commandStream)
            command.execute(this.session)
        }   
    }
}