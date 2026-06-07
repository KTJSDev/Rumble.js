export class LogicChestBattle {
    static encode(stream) {
        // LogicChest arr
        stream.writeVInt(4)

        stream.writeBoolean(true)
        // LogicChest
        stream.writeVInt(1)
        stream.writeVInt(3)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(true)
        stream.writeBoolean(false)
        stream.writeBoolean(false)

        stream.writeBoolean(true)
        // LogicTimer
        stream.writeVInt(205780)
        stream.writeVInt(216000)
        stream.writeVInt(1780707759)

        stream.writeVInt(8)
        stream.writeVInt(6)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)

        stream.writeBoolean(false)

        // LogicSpell arr
        stream.writeBoolean(false)
        stream.writeVInt(0)
        stream.writeBoolean(false)

        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeBoolean(false)

        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
    }
}