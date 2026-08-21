import { LogicReward } from "../../home/reward/LogicReward.js";
import { LogicCommand } from "../LogicCommand.js";
import { LogicClaimRewardCommand } from "../reward/LogicClaimRewardCommand.js";

export class LogicClaimQuestRewardCommand extends LogicCommand {
    slot = 0

    decode(stream) {
        super.encode(stream)
        this.slot = stream.readVInt()
    }

    execute(session) {
        const claimReward = new LogicClaimRewardCommand()

        claimReward.reward = LogicReward.createExampleReward()
        claimReward.chestType = 1
        claimReward.locationId = 6

        session.addCommand(claimReward)
    }
}