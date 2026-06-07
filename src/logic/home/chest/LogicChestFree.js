export class LogicChestFree {
    static encode(stream) {
        stream.writeVInt(0)
        // LogicTimer
        stream.writeVInt(288000)
        stream.writeVInt(288000)
        stream.writeVInt(1780711870)

        // LogicChest
        stream.writeBoolean(true)
        // LogicChest
        stream.writeVInt(2)
        stream.writeVInt(2)
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

        stream.writeVInt(2)
        stream.writeVInt(2)
        stream.writeVInt(-1)
        stream.writeVInt(0)
        stream.writeVInt(0)

        stream.writeBoolean(false)

        // LogicSpell arr
        stream.writeBoolean(false)

        stream.writeVInt(0)
        stream.writeBoolean(false)

        stream.writeVInt(0)
        stream.writeVInt(-1)
    }
}