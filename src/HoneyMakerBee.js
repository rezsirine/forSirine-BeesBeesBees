var HoneyMakerBee = function() {
    Bee.call(this)
    this.age = 10
    this.job = 'make honey'
    this.honeyPot = 0
};

HoneyMakerBee.prototype = Object.create(Bee.prototype)
HoneyMakerBee.prototype.constructor = HoneyMakerBee

HoneyMakerBee.prototype.makeHoney = function() {
    return `honey pot now filled with ${this.honeyPot++}`
}
HoneyMakerBee.prototype.giveHoney = function() {
    if(this.honeyPot > 0) {
        return `honey pot now filled with ${--this.honeyPot}`
    }
    return 'no honey to give'
}


var honeyMakerBee =new HoneyMakerBee()

console.log(`this is honeyMakerBee: ${JSON.stringify(honeyMakerBee)}`);