import { LogicLong } from "../../titan/logic/LogicLong.js"

export class ByteStreamHelper {
    static encodeLogicLong(stream, long) {
        stream.writeVInt(long.high)
        stream.writeVInt(long.low)
    }

    static decodeLogicLong(stream) {
        const logicLong = new LogicLong()
        
        logicLong.high = stream.readVInt()
        logicLong.low = stream.readVInt()
    
        return logicLong
    }
}