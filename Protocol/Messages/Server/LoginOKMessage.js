const PiranhaMessage = require('../../PiranhaMessage')

class LoginOKMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 20104
    this.client = client
    this.version = 1
  }

  encode () {
    this.writeHex("01000000010032d7af000000010032d7af00000028386d63333937337a79636337323478626766376b73796d6d7367677474636e7270633377746a7873ffffffffffffffff0100871b010000000470726f64049b0700000000000000000d313633363036313731363734310000000d3136333630363037303730303000ffffffffffffffffffffffffffffffff0000002d68747470733a2f2f64763072397830743665376c772e636c6f756466726f6e742e6e65742f315f305f313733350000000d")
    this.writeString("0.0.0.0")
  }
}

module.exports = LoginOKMessage
