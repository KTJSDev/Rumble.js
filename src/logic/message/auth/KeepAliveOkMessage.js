import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js"

export class KeepAliveOkMessage extends PiranhaMessage {
    getMessageType() {
        return 20108
    }
}