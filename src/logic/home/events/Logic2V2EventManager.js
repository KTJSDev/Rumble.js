export class Logic2V2EventManager {
    static encode(stream) {
        stream.writeVInt(7119)
        stream.writeVInt(7119)
        stream.writeVInt(0)
        stream.writeVInt(0)
        // VintArr 1
        stream.writeVInt(8)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
    }
}