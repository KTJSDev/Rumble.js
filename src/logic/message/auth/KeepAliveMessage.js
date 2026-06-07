import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js"

export class KeepAliveMessage extends PiranhaMessage {
    getMessageType() {
        return 10108
    }
}