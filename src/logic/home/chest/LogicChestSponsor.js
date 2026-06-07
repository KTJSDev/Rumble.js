export class LogicChestSponsor {
    static encode(stream) {
        stream.writeVInt(0)
        stream.writeBoolean(false)
        // LogicTimer
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)
        
        stream.writeBoolean(true)
        // LogicChest
        stream.writeVInt(48)
        stream.writeVInt(48)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(false)

        stream.writeBoolean(false)

        stream.writeVInt(4)
        stream.writeVInt(24)
        stream.writeVInt(-1)
        stream.writeVInt(0)
        stream.writeVInt(0)

        stream.writeBoolean(false)

        // LogicSpell arr
        stream.writeBoolean(false)

        stream.writeVInt(0)
        stream.writeBoolean(false)
    }
}