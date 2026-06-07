export class LogicChallengeGenerated {
    static encode(stream) {
        // LogicChallengeDeck
        stream.writeVInt(0)

        // LogicChallengeDeck
        stream.writeVInt(0)
        
        stream.writeVInt(-1)
        stream.writeVInt(0)
    }
}