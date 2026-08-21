export class LogicChestStar {
    static encode(stream) {
        stream.writeVInt(0)
        stream.writeBoolean(false)
        // LogicTimer
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)
        stream.writeBoolean(false)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
    }
}   