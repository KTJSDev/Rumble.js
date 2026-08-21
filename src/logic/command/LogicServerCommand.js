import { LogicCommand } from "./LogicCommand.js";

export class LogicServerCommand extends LogicCommand {
    id = 0

    encode(stream) {
        stream.writeVInt(this.id)
        super.encode(stream)
    }
}