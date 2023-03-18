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

  }

  async process () {
    await new LoginOKMessage(this.client).send()
    await new OwnHomeDataMessage(this.client).send()
  }
}

module.exports = TitanLoginMessage
