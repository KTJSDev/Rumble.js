export class LogicLong {
    constructor(high, low) {
        this.high = high ?? 0;
        this.low = low ?? 0;
    }

    encode(stream) {
        stream.writeInt(this.high)
        stream.writeInt(this.low)
    }

    decode(stream) {
        this.high = stream.readInt()
        this.low = stream.readInt()
    }

    isZero() {
        return this.high === 0 && this.low === 0
    }
}