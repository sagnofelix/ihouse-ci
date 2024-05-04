export class Message {
    constructor(id, message) {
        this.id = id;
        this.message = message;
    }

    toStr() {
        return "Message n°: " + this.id + "\Message: " + this.message
    }

    describe() {
        console.log(this.toStr());
    }
}