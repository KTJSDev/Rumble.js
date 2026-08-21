import { LogicCommand } from "./LogicCommand.js";
import { LogicClaimQuestRewardCommand } from "./quests/LogicClaimQuestRewardCommand.js";

export class LogicCommandFactory {
    static createCommandByType(commandType) {
        switch(commandType) {
            case 566:
                return new LogicClaimQuestRewardCommand()
            default: return new LogicCommand()
        }
    }
}