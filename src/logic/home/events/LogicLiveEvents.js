import { ByteStream } from "../../../titan/stream/ByteStream.js";
import { LogicLiveEvent } from "./LogicLiveEvent.js";

export class LogicLiveEvents {
    static encode(stream) {
        stream.writeVInt(0)
        stream.writeVInt(LogicLiveEvent.COUNT)

        // There should be loop with encoding LogicLiveEvent[]
        // But since this server is not meant for using in prod...
        // Deal with storing it if want to use this server for public use 
        LogicLiveEvent.encode(stream)
    } 
}