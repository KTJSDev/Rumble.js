export class LogicChestStar {
    static encode(stream) {
        stream.writeVInt(9)
        stream.writeBoolean(false)
        
        // LogicTimer
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)

        // LogicChest
        stream.writeBoolean(false)

        stream.writeVInt(-1)
        stream.writeVInt(-1)
    }
}   