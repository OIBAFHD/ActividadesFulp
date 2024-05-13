
//iteration 1
// Soldier
class Soldier {

    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength

    }
    receiveDamage(damage) {
        this.health = this.health - damage

    }
}
//iteration 2
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage() {
        this.health = this.health - damage
        if (this.health > 0) {
            console.log(this.name + ' has received DAMAGE points of damage')
        } else {
            console.log(this.name + ' has died in act of combat')
        }

    }
    battleCry() {
        return ' Odin Owns You All!'
    }

}
//iteration 3

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    receiveDamage() {
        this.health = this.health - damage
        if (this.health > 0) {
            console.log(" A Saxon has received DAMAGE points of damage")
        } else {
            console.log("A Saxon has died in combat")
        }
    }
}
//bonus
// War
class War {
    constructor() {
        this.VikingArmy = []
        this.Saxon = []
    }
    addViking(Viking) {
        this.VikingArmy.push(Viking)

    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)

    }
    vikingAttack() {
        if () {

        }

    }
    saxonAttack() {

    }
    showStatus() {

    }
}