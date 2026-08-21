import { LogicMurmur3 } from "../../../titan/security/hash/LogicMurmur3.js"

export class LogicSpell {
    spellData = 0 // +0, murmur3 32bit hashed character id
    level = 0 // +4
    field8 = 0 // +8
    field12 = 0 // +12
    material = 0 // +16
    score = 0 // +20
    maxScore = 0 // +24
    field28 = false // +28
    showNewIcon = false // +29
    showNewCount = 0 // +32
    recentUseCount = 0 // +36
    runeID = -1 // +40
    runeTimeStored = -1 // +44
    field48 = 0 // +48

    encode(stream) {
        stream.writeVInt(this.spellData)
        stream.writeVInt(this.level)
        stream.writeVInt(this.field8)
        stream.writeVInt(this.field12)
        stream.writeVInt(this.material)
        stream.writeVInt(this.score)
        stream.writeVInt(this.maxScore)
        stream.writeVInt(this.showNewCount)
        stream.writeVInt(this.recentUseCount)
        stream.writeBoolean(this.field28)
        stream.writeBoolean(this.showNewIcon)
        stream.writeVInt(this.runeID)
        stream.writeVInt(this.runeTimeStored)
        stream.writeVInt(this.field48)
    }

    static createExampleSpell(characterId = "pawn") {
        const spell = new LogicSpell()

        spell.spellData = LogicMurmur3.hash32(characterId)
        spell.material = 1337

        return spell
    }
}