export class ByteStreamHelper {
    static encodeLogicLong(stream, long) {
        stream.writeVInt(long.high)
        stream.writeVInt(long.low)
    }
}