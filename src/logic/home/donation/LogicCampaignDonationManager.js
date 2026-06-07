export class LogicCampaignDonationManager {
    static encode(stream) {
        stream.writeVInt(-1)
        stream.writeBoolean(false)
    }
}