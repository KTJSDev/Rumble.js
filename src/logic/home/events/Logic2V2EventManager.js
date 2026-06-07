export class Logic2V2EventManager {
    static encode(stream) {
        stream.writeVInt(6918)
        stream.writeVInt(6918)
        stream.writeVInt(0)
        stream.writeVInt(0)
        // VintArr 1
        stream.writeVInt(10)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
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