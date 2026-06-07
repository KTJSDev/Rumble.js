export class LogicTutorial {
    static encode(stream) {
        stream.writeVInt(50)
        stream.writeVInt(50)
    }
}