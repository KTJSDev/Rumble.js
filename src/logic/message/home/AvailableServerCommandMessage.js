import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js";
import { LogicCommandManager } from "../../command/LogicCommandManager.js";

export class AvailableServerCommandMessage extends PiranhaMessage {
    command = null

    encode() {
        super.encode()
        LogicCommandManager.encodeRawCommand(this.stream, this.command)
    }

    getMessageType() {
        return 24111
    }
}