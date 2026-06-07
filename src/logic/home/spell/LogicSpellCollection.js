export class LogicSpellCollection {
    static encode(stream) {
        stream.writeVInt(3)

        // LogicSpell
        stream.writeVInt(-612833286)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(29678289)
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
        stream.writeVInt(-764064612)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(29678289)
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
        stream.writeVInt(1991136730)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeVInt(1)
        stream.writeVInt(13)
        stream.writeVInt(13)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
        stream.writeBoolean(false)
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)
    }
}