import { LogicLiveEvents } from "./LogicLiveEvents.js"

export class LogicEventManager {
    // Can you believe in this? This shit eats a big amount of bytes!
    static encode(stream) {
        stream.writeVInt(0)
        stream.writeBoolean(true)

        // If upper writeBoolean is false, then we do not encode LogicLiveEvents
        LogicLiveEvents.encode(stream)
    }
}