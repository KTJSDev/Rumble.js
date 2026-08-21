import { ByteStream } from "../../titan/stream/ByteStream.js";
import { LogicCommandRaw } from "./LogicCommandRaw.js";

export class LogicCommandManager {
    static decodeCommandRaw(stream) {
        const rawCommand = new LogicCommandRaw() // ??? why
        rawCommand.commandType = stream.readVInt()
        rawCommand.unk = stream.readVInt()
        rawCommand.executeTick = stream.readVInt()
        rawCommand.tickWhenGiven = stream.readVInt()
        rawCommand.bytes = stream.readBytes()

        return rawCommand
    }

    static encodeRawCommand(stream, command) {
        if (!command)
            return;
        
        stream.writeVInt(command.getCommandType())
        stream.writeVInt(0)
        stream.writeVInt(-1)
        stream.writeVInt(-1)

        const commandStream = new ByteStream()
        command.encode(commandStream)

        stream.writeBytes(commandStream.buffer)
    }
}