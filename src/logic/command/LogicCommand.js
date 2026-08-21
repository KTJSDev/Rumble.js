import { LogicLong } from "../../titan/logic/LogicLong.js";
import { ByteStreamHelper } from "../helper/ByteStreamHelper.js";

export class LogicCommand {
    executorAccountId = new LogicLong(0, 1)

    decode(stream) {
        this.executorAccountId = ByteStreamHelper.decodeLogicLong(stream)
    }

    encode(stream) {
        ByteStreamHelper.encodeLogicLong(stream, this.executorAccountId)
    }

    execute(session) {} // as a said earlier...

    getCommandType() {
        return 0
    }
}