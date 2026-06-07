export class LogicQuestManager {
    static encode(stream) {
        stream.writeBoolean(true)
        stream.writeVInt(0)
        stream.writeVInt(-1834624284)
        stream.writeVInt(1)
        stream.writeVInt(10)
        stream.writeVInt(-1)
        stream.writeVInt(1375204617)
        stream.writeBoolean(true)

        stream.writeVInt(1)
        // LogicQuestReward
        stream.writeVInt(3)
        stream.writeVInt(6)


        stream.writeBoolean(false)
        // LogicQuestMain


        stream.writeBoolean(true)
        stream.writeVInt(4)
        stream.writeVInt(-1339486856)
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeVInt(4)
        stream.writeVInt(-1339486856)
        stream.writeBoolean(true)

        stream.writeVInt(1)
        // LogicQuestReward
        stream.writeVInt(3)
        stream.writeVInt(1)


        stream.writeBoolean(false)
        // LogicQuestDonate


        // LogicQuest[]
        stream.writeVInt(2)

        stream.writeVInt(2)
        stream.writeVInt(1811643089)
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeVInt(1)
        stream.writeVInt(1600487788)
        stream.writeBoolean(true)

        stream.writeVInt(1)
        // LogicQuestReward
        stream.writeVInt(3)
        stream.writeVInt(1)


        stream.writeBoolean(false)
        // LogicQuestBattle
        stream.writeVInt(5)

        stream.writeVInt(2)
        stream.writeVInt(-1778837707)
        stream.writeVInt(0)
        stream.writeVInt(1)
        stream.writeVInt(1)
        stream.writeVInt(-1847268813)
        stream.writeBoolean(true)

        stream.writeVInt(1)
        // LogicQuestReward
        stream.writeVInt(3)
        stream.writeVInt(1)


        stream.writeBoolean(false)
        // LogicQuestBattle
        stream.writeVInt(6)


        // VintArr 1
        stream.writeVInt(1)

        stream.writeVInt(670250089)

        // VintArr 2
        stream.writeVInt(0)


        stream.writeVInt(-1545866455)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(true)
    }
}