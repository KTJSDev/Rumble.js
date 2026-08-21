export class LogicDonationManager {
    static encode(stream) {
        // LogicTimer
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)
        // LogicTimer
        stream.writeVInt(425080)
        stream.writeVInt(431280)
        stream.writeVInt(1787275173)
        // LogicTimer
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)
    }
}