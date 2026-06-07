import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js"
import { LogicLong } from "../../../titan/logic/LogicLong.js"

export class LoginMessage extends PiranhaMessage {
    decode() {
        this.id = new LogicLong()
        this.id.decode(this.stream)
        this.passToken = this.stream.readString()

        this.major = this.stream.readVInt()
        this.build = this.stream.readVInt()
        this.minor = this.stream.readVInt()

        this.fingerprint = this.stream.readString()
        this.f1 = this.stream.readString()
        this.unkn = this.stream.readString()
        this.f2 = this.stream.readString()
        this.phoneModel = this.stream.readString() //phone model
        this.adid = this.stream.readString() //ADID
        this.osV = this.stream.readString()
        this.isAndroid = this.stream.readBoolean() //is android
        this.f3 = this.stream.readString()
        this.unknown = this.stream.readString()
        this.lang = this.stream.readString() //language
        this.stream.readVInt()
        this.stream.readString()
        this.stream.readBoolean()
        this.stream.readBoolean()
        this.stream.readString()
        this.stream.readVInt()
        this.stream.readString()
        this.stream.readString()
        this.stream.readString()
        this.stream.readString()
        this.stream.readVInt()
        this.stream.readString()
    }

    getMessageType() {
        return 10101
    }
}