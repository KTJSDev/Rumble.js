export class LogicChestHistory {
    static encode(stream) {
        stream.writeVInt(2)
        stream.writeBoolean(true)
        // LogicChest
        stream.writeVInt(1)
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(true)
        stream.writeBoolean(false)
        stream.writeBoolean(true)
        stream.writeBoolean(false)
        stream.writeBoolean(false)

        stream.writeBoolean(false)

        stream.writeVInt(5)
        stream.writeVInt(6)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)

        stream.writeBoolean(false)

        // LogicSpell arr
        stream.writeBoolean(false)

        stream.writeVInt(1787253797)
        stream.writeBoolean(false)

        stream.writeBoolean(true)
        // LogicChest
        stream.writeVInt(1)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(true)
        stream.writeBoolean(false)
        stream.writeBoolean(true)
        stream.writeBoolean(false)
        stream.writeBoolean(false)

        stream.writeBoolean(false)

        stream.writeVInt(4)
        stream.writeVInt(6)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)

        stream.writeBoolean(false)

        // LogicSpell arr
        stream.writeBoolean(false)

        stream.writeVInt(1787253732)
        stream.writeBoolean(false)

        stream.writeVInt(2)
        stream.writeBoolean(true)
        // LogicReward
        stream.writeVInt(2)

        // LogicSpell
        stream.writeVInt(429124811)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(29787563)
        stream.writeVInt(1)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        // LogicSpell
        stream.writeVInt(-1562196636)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(29787563)
        stream.writeVInt(1)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        stream.writeVInt(15)
        stream.writeVInt(10)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)

        stream.writeBoolean(true)
        // LogicReward
        stream.writeVInt(1)

        // LogicSpell
        stream.writeVInt(-1656566864)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(29787562)
        stream.writeVInt(1)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        stream.writeVInt(15)
        stream.writeVInt(10)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
    }
}