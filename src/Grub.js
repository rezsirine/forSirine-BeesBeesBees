var Grub = function() {
    this.age = 0
    this.color = 'pink'
    this.food = 'jelly'
};

Grub.prototype.eat = function() {
    return `I ate ${this.food}`
}

var grub =new Grub()
console.log(`this is grub: ${JSON.stringify(grub)}`);