import { LoginMessage } from "./auth/LoginMessage.js"
import { KeepAliveMessage } from "./auth/KeepAliveMessage.js"

export class LogicHyperionMessageFactory {
    static createMessageByType(messageType) {
        switch (messageType) {
            case 10101:
                return new LoginMessage()
            case 10108:
                return new KeepAliveMessage()
        }
    }
}