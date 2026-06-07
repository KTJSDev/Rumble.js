export class RC4Encrypter {
    constructor(key, nonce) {
        this.initState(key, nonce)
    }

    initState(baseKey, nonce) {
        const keyBytes = Buffer.concat([Buffer.from(baseKey), Buffer.from(nonce)]);

        this._key = Buffer.alloc(256)
        this._x = 0
        this._y = 0

        for (let i = 0; i < 256; i++) {
            this._key[i] = i;
        }

        for (let i = 0, j = 0; i < 256; i++) {
            j = (j + this._key[i] + keyBytes[i % keyBytes.length]) & 0xff;

            const tmp = this._key[i];
            this._key[i] = this._key[j];
            this._key[j] = tmp;
        }

        for (let i = 0; i < keyBytes.length; i++) {
            this._x = (this._x + 1) & 0xff;
            this._y = (this._y + this._key[this._x]) & 0xff;

            const tmp = this._key[this._y];
            this._key[this._y] = this._key[this._x];
            this._key[this._x] = tmp;
        }
    }

    decrypt(input) {
        return this.encrypt(input)
    }

    encrypt(input) {
        const output = Buffer.alloc(input.length);

        for (let i = 0; i < input.length; i++) {
            this._x = (this._x + 1) & 0xFF;
            this._y = (this._y + this._key[this._x]) & 0xFF;

            const tmp = this._key[this._y];
            this._key[this._y] = this._key[this._x];
            this._key[this._x] = tmp;

            const idx = (this._key[this._x] + this._key[this._y]) & 0xFF;
            output[i] = input[i] ^ this._key[idx];
        }

        return output;
    }
}