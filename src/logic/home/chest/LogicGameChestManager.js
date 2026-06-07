import { LogicChestBattle } from "./LogicChestBattle.js";
import { LogicChestClanCrown } from "./LogicChestClanCrown.js";
import { LogicChestClanVsClan } from "./LogicChestClanVsClan.js";
import { LogicChestFree } from "./LogicChestFree.js";
import { LogicChestHistory } from "./LogicChestHistory.js";
import { LogicChestManager } from "./LogicChestManager.js";
import { LogicChestSeason } from "./LogicChestSeason.js";
import { LogicChestSponsor } from "./LogicChestSponsor.js";
import { LogicChestStar } from "./LogicChestStar.js";

export class LogicGameChestManager {
    static encode(stream) {
        LogicChestManager.encode(stream)
        LogicChestBattle.encode(stream)
        LogicChestFree.encode(stream)
        LogicChestStar.encode(stream)
        LogicChestClanCrown.encode(stream)
        LogicChestClanVsClan.encode(stream)
        LogicChestSeason.encode(stream)
        LogicChestSponsor.encode(stream)
        LogicChestHistory.encode(stream)
    }
}