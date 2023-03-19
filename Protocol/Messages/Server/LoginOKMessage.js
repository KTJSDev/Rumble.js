const PiranhaMessage = require('../../PiranhaMessage')

class LoginOKMessage extends PiranhaMessage {
  constructor (client, lowID, token) {
    super()
    this.id = 20104
    this.client = client
    this.version = 1

    this.lowID = lowID
    this.token = token
  }

  encode () {
    this.writeLong(0, this.lowID) //accountid
    this.writeLong(0, this.lowID) //homeid
    this.writeString(this.token) //token
    this.writeString() //facebook id
    this.writeString() //gamecenter id
    this.writeVInt(2) //major
    this.writeVInt(2) //minor
    this.writeVInt(1) //bild
    this.writeVInt(1) //content
    this.writeString("dev") //env
    this.writeVInt(0)
    this.writeVInt(0) //play time sec
    this.writeVInt(0) //days since start playing hello my name is l-wr-ol-wrfgi00iro0
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeVInt(0)
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeString()
    this.writeString("0.0.0.0")
  }
}

module.exports = LoginOKMessage
