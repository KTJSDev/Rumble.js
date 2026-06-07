export class LogicKeyValue {
    constructor(key, value) {
        this.key = key
        this.value = value
    }

    encode(stream) {
        stream.writeVInt(this.key)
        stream.writeVInt(this.value)
    }
}