export class LogicDonationManager {
    static encode(stream) {
        // LogicTimer
        stream.writeVInt(861420)
        stream.writeVInt(864000)
        stream.writeVInt(1780740541)
        // LogicTimer
        stream.writeVInt(373580)
        stream.writeVInt(431580)
        stream.writeVInt(1780716149)
        // LogicTimer
        stream.writeVInt(428520)
        stream.writeVInt(432000)
        stream.writeVInt(1780718896)
    }
}