import { LogicServerCommand } from "../LogicServerCommand.js";

export class LogicClaimRewardCommand extends LogicServerCommand {
    reward = null
    locationId = 0
    chestType = 0

    encode(stream) {
        stream.writeBoolean(this.reward !== null)
        if (this.reward !== null) {
            this.reward.encode(stream)
        }

        stream.writeVInt(this.locationId)
        stream.writeVInt(this.chestType)

        super.encode(stream)
    }

    getCommandType() {
        return 210
    }
}