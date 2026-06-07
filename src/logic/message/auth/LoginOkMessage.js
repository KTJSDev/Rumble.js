import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js"
import { LogicLong } from "../../../titan/logic/LogicLong.js"

export class LoginOkMessage extends PiranhaMessage {
    id = new LogicLong(0, 0)
    passToken = ""

    encode() {
        super.encode()
        this.id.encode(this.stream) //accountid
        this.id.encode(this.stream) //accountid
        this.stream.writeString(this.passToken) //token
        this.stream.writeString() //facebook id
        this.stream.writeString() //gamecenter id
        this.stream.writeVInt(2) //major
        this.stream.writeVInt(2) //minor
        this.stream.writeVInt(1) //bild
        this.stream.writeVInt(1) //content
        this.stream.writeString("dev") //env
        this.stream.writeVInt(0)
        this.stream.writeVInt(0) //play time sec
        this.stream.writeVInt(0) //days since start playing hello my name is l-wr-ol-wrfgi00iro0
        this.stream.writeString()
        this.stream.writeString()
        this.stream.writeString()
        this.stream.writeVInt(0)
        this.stream.writeString()
        this.stream.writeString()
        this.stream.writeString()
        this.stream.writeString()
        this.stream.writeString()
        this.stream.writeString("0.0.0.0")
    }

    getMessageType() {
        return 20104
    }
}