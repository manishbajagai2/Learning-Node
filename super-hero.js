class SuperHero {
    constructor (name) {
        this.name = name
    }

    getName(){
        return this.name
    }

    setName(name) {
        this.name = name
    }
}

// const superHero = new SuperHero("Batman")

// module.exports = superHero;

module.exports = SuperHero;