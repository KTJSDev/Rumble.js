export class LogicChestManager {
    static encode(stream) {
        stream.writeVInt(7)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeVInt(700) // battlepass tokens
    }
}