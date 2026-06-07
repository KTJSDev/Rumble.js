export class LogicCreatorSupport {
    static encode(stream) {
        stream.writeStringReference('KTJS')
        stream.writeVInt(1780697014)
        stream.writeStringReference('')
        stream.writeStringReference('')
    }
}