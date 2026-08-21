export class LogicStreak {
    static encode(stream) {
        stream.writeVInt(1)
        stream.writeVInt(4)
        stream.writeVInt(40685)
        stream.writeVInt(4)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
    }
}