export class LogicChestClanCrown {
    static encode(stream) {
        // LogicChest
        stream.writeBoolean(false)

        // LogicAllianceCrownChest
        stream.writeBoolean(false)

        stream.writeBoolean(false)
    }
}