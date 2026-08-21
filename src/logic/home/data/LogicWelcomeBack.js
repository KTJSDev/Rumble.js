export class LogicWelcomeBack {
    static encode(stream) {
        stream.writeVInt(2)
        stream.writeVInt(3160)
        stream.writeVInt(0)
        stream.writeVInt(-1)
        stream.writeVInt(1)
        stream.writeVInt(-1)
        stream.writeBoolean(false)
        stream.writeVInt(3160)
        stream.writeVInt(9280)
        stream.writeInt(1787253919)

        // Object 0
        stream.writeVInt(4)
        stream.writeVInt(0)
        stream.writeVInt(160)

        // Object 1
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        // Object 2
        stream.writeVInt(0)
        stream.writeVInt(5)
        stream.writeVInt(0)

        // Object 3
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        // Object 4
        stream.writeVInt(5)
        stream.writeVInt(0)
        stream.writeVInt(35)

        // Object 5
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        // Object 6
        stream.writeVInt(0)
        stream.writeVInt(4)
        stream.writeVInt(0)

        // Object 7
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        // Object 8
        stream.writeVInt(4)
        stream.writeVInt(0)
        stream.writeVInt(960)

        // Object 9
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        // Object 10
        stream.writeVInt(3)
        stream.writeVInt(2)
        stream.writeVInt(1)

        // Object 11
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)

        // Object 12
        stream.writeVInt(3)
        stream.writeVInt(3)
        stream.writeVInt(1)

        // Object 13
        stream.writeVInt(0)
        stream.writeVInt(6)
        stream.writeVInt(0)

        // Object 14
        stream.writeVInt(5)
        stream.writeVInt(0)
        stream.writeVInt(20)

        // Object 15
        stream.writeVInt(-1)
        stream.writeVInt(-1)
        stream.writeVInt(0)
    }
}