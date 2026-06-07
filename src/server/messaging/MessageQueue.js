export class MessageQueue {
    constructor() {
        this.data = Buffer.alloc(0);
    }

    push(bytes) {
        this.data = Buffer.concat([this.data, bytes]);
    }

    get() {
        return this.data;
    }

    size() {
        return this.data.length;
    }

    release(size) {
        this.data = this.data.slice(size);
    }

    free() {
        this.data = Buffer.alloc(0)
    }

    pendingJob() {
        if (this.size() < 7)
            return false;
        return this.get().readUIntBE(2, 3) <= this.size() - 7;
    }
}