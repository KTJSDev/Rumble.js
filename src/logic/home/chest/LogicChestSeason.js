export class LogicChestSeason {
    static encode(stream) {
        stream.writeVInt(-1)
        stream.writeVInt(0)
    }
}