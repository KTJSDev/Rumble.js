import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js"
import { ByteStreamHelper } from "../../helper/ByteStreamHelper.js";
import { LogicKeyValue } from "../../home/data/LogicKeyValue.js";
import { LogicLong } from "../../../titan/logic/LogicLong.js";
import { LogicEventManager } from "../../home/events/LogicEventManager.js";
import { LogicLiveGlobalManager } from "../../home/global/LogicLiveGlobalManager.js";
import { LogicRewardManager } from "../../home/reward/LogicRewardManager.js";
import { LogicCreatorSupport } from "../../home/creator/LogicCreatorSupport.js";
import { LogicTutorial } from "../../home/tutorial/LogicTutorial.js";
import { LogicAchievements } from "../../home/achievements/LogicAchievements.js";
import { LogicShop } from "../../home/shop/LogicShop.js";
import { LogicSpellDeck } from "../../home/spell/LogicSpellDeck.js";
import { LogicSpellCollection } from "../../home/spell/LogicSpellCollection.js";
import { LogicGameChestManager } from "../../home/chest/LogicGameChestManager.js";
import { LogicDonationManager } from "../../home/donation/LogicDonationManager.js";
import { LogicChallenges } from "../../home/challenge/LogicChallenges.js";
import { LogicSurvival } from "../../home/survival/LogicSurvival.js";
import { LogicQuestManager } from "../../home/quests/LogicQuestManager.js";
import { LogicGlobalEvent } from "../../home/events/LogicGlobalEvent.js";
import { LogicGifts } from "../../home/gifts/LogicGifts.js";
import { LogicCupManager } from "../../home/cup/LogicCupManager.js";
import { LogicCampaignDonationManager } from "../../home/donation/LogicCampaignDonationManager.js";
import { LogicAdvertisementLogger } from "../../home/ads/LogicAdvertisementLogger.js";
import { Logic2V2EventManager } from "../../home/events/Logic2V2EventManager.js";

export class OwnHomeDataMessage extends PiranhaMessage {
    static KEY_VALUES = 7
    keyValues = [
        [
            new LogicKeyValue(5000001, 999999), // Gold
            new LogicKeyValue(5000002, 888888),
            new LogicKeyValue(5000023, 1),
            new LogicKeyValue(5000026, 1),
        ],
        [], [], [],
        [
            new LogicKeyValue(5000011, 999999), // Best Trophies
            new LogicKeyValue(5000012, 8), // Found Rumblers
            new LogicKeyValue(5000013, 666), // 3Goals amount
            new LogicKeyValue(5000027, 1337), // Season smth
        ],
        [], []
    ]

    encode() {
        super.encode()
        // LogicGameMode
        // LogicHome
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(-1)
        this.stream.writeInt(1780697470)
        this.stream.writeVInt(0)

        // spells (LogicSpellStat[])
        this.stream.writeVInt(0)

        LogicEventManager.encode(this.stream)
        LogicLiveGlobalManager.encode(this.stream)
        LogicRewardManager.encode(this.stream)

        LogicCreatorSupport.encode(this.stream)


        this.stream.writeVInt(-1)
        // LogicHome end

        this.stream.writeLong(0, 1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(20240)
        this.stream.writeInt(1)
        this.stream.writeVInt(0)


        // deck related?
        this.stream.writeVInt(5)

        this.stream.writeVInt(8) // always 8 tho
        this.stream.writeVInt(-1562196636)
        this.stream.writeVInt(349985024)
        this.stream.writeVInt(-1276240925)
        this.stream.writeVInt(-727667870)
        this.stream.writeVInt(-1042652371)
        this.stream.writeVInt(-1644110241)
        this.stream.writeVInt(-1656566864)
        this.stream.writeVInt(429124811)

        this.stream.writeVInt(8)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeVInt(8)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeVInt(8)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeVInt(8)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)


        LogicTutorial.encode(this.stream)
        LogicAchievements.encode(this.stream)
        LogicShop.encode(this.stream)


        LogicSpellDeck.encode(this.stream)
        LogicSpellDeck.encode2(this.stream)
        LogicSpellCollection.encode(this.stream)

        LogicGameChestManager.encode(this.stream)

        LogicDonationManager.encode(this.stream)
        LogicChallenges.encode(this.stream)
        LogicSurvival.encode(this.stream)

        LogicQuestManager.encode(this.stream)

        LogicGlobalEvent.encode(this.stream)
        LogicGifts.encode(this.stream)
        LogicCupManager.encode(this.stream)
        LogicCampaignDonationManager.encode(this.stream)
        LogicAdvertisementLogger.encode(this.stream)

        // Bitlist
        this.stream.writeVInt(2)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)

        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(91)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)
        this.stream.writeInt(3)
        this.stream.writeStringReference('')
        this.stream.writeStringReference('')
        this.stream.writeBoolean(false)
        this.stream.writeVInt(0)

        Logic2V2EventManager.encode(this.stream)

        // CustomDeck[]
        this.stream.writeVInt(1)
        this.stream.writeBoolean(true)
        // CustomDeck
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)
        this.stream.writeBoolean(true)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(0)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(2)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(3)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(4)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomObject
        this.stream.writeVInt(1)
        this.stream.writeVInt(5)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        // CustomCollectiono[]
        this.stream.writeVInt(2)

        this.stream.writeBoolean(true)
        // CustomCollection
        this.stream.writeVInt(1)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(false)

        this.stream.writeBoolean(true)
        // CustomCollection
        this.stream.writeVInt(4)
        this.stream.writeVInt(0)
        this.stream.writeBoolean(true)

        // LogicClientAvatar
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))
        this.stream.writeString("KTJS Enthusiast")
        this.stream.writeString("PL")
        this.stream.writeVInt(0)
        this.stream.writeVInt(1780700573)
        this.stream.writeVInt(1780694548)

        this.stream.writeVInt(1)
        this.stream.writeVInt(1999999) // Trophies
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(OwnHomeDataMessage.KEY_VALUES)

        for (const entry of this.keyValues) {
            this.stream.writeVInt(entry.length)
            for (const keyV of entry) {
                keyV.encode(this.stream)
            }
        }

        this.stream.writeVInt(999999) // diamonds
        this.stream.writeVInt(999999) // free diamonds

        this.stream.writeVInt(228) // exp
        this.stream.writeVInt(69) // level
        this.stream.writeVInt(1) // level
        this.stream.writeVInt(0) // level

        this.stream.writeBoolean(true)
        this.stream.writeBoolean(false)
        this.stream.writeBoolean(false)

        // Alliance Data
        this.stream.writeBoolean(true)
        ByteStreamHelper.encodeLogicLong(this.stream, new LogicLong(0, 1))
        this.stream.writeString("t.me/ktjs_re")
        this.stream.writeVInt(0) // Alliance Thumbnail
        this.stream.writeVInt(5) // Alliance Role

        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(3)
        this.stream.writeVInt(0)
        this.stream.writeVInt(0)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)

        this.stream.writeBoolean(false)

        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(-1)
        this.stream.writeVInt(1780694548)
        this.stream.writeVInt(-2116610414)
        // LogicClientAvatar end

        this.stream.writeVInt(3)

    }

    getMessageType() {
        return 24101
    }
}