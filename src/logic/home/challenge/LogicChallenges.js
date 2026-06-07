import { LogicChallengeGenerated } from "./LogicChallengeGenerated.js"

export class LogicChallenges {
    static encode(stream) {
        // VintArr 1
        stream.writeVInt(2)
        stream.writeVInt(0)
        stream.writeVInt(0)

        // VintArr 2
        stream.writeVInt(0)

        // VintArr 3
        stream.writeVInt(0)

        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(-1)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)

        LogicChallengeGenerated.encode(stream)
    }
}