const PiranhaMessage = require('../../PiranhaMessage')
const LoginOKMessage = require('../Server/LoginOKMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')

class TitanLoginMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 10101
    this.version = 0
  }

  decode () {
    this.lowID = this.readLong()
    this.token = this.readString()

    this.major = this.readVInt()
    this.build = this.readVInt()
    this.minor = this.readVInt()

    this.fingerprint = this.readString()
    this.readString()
    this.unkn = this.readString()
    this.readString()
    this.phoneModel = this.readString() //phone model
    this.adid = this.readString() //ADID
    this.osV = this.readString()
    this.isAndroid = this.readBoolean() //is android
    this.readString()
    this.unknown = this.readString()
    this.lang = this.readString() //language
    this.readVInt()
    this.readString()
    this.readBoolean()
    this.readBoolean()
    this.readString()
    this.readVInt()
    this.readString()
    this.readString()
    this.readString()
    this.readString()
    this.readVInt()
    this.readString()
  }

  async process () {
    await new LoginOKMessage(this.client, this.lowID[1], this.token).send()
    await new OwnHomeDataMessage(this.client).send()
  }
}

module.exports = TitanLoginMessage
