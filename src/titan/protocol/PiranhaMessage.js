import { ByteStream } from '../stream/ByteStream.js'

export class PiranhaMessage {
    constructor(bytes) {
        this.stream = new ByteStream(bytes)
    }

    encode() { this.stream.writeBoolean(true) }
    decode() { this.stream.readBoolean() }

    getMessageType() {
        return 0
    }
}