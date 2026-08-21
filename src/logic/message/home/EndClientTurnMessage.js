import { PiranhaMessage } from "../../../titan/protocol/PiranhaMessage.js";
import { LogicCommandManager } from "../../command/LogicCommandManager.js";

export class EndClientTurnMessage extends PiranhaMessage {
    tick = 0
    checksum = 0
    commands = []

    decode() {
        super.decode()
        this.tick = this.stream.readVInt()
        this.checksum = this.stream.readVInt()

        const commandCount = this.stream.readVInt()

        if (commandCount > 512) {
            console.error(`EndClientTurnMessage::decode() command count is invalid (${commandCount})`)
            return;
        }

        for (let i = 0; i < commandCount; i++) {
            const rawCommand = LogicCommandManager.decodeCommandRaw(this.stream)

            this.commands.push(rawCommand)
        }
    }

    getMessageType() {
        return 14102
    }
}