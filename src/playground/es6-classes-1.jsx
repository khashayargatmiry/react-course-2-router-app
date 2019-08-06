class Person {
    constructor (name='Anonymous'){
        this.name = name
    }

    getGreeting() {
        return `Hi! ${this.name}`
    }
}

class Student extends Person {
    constructor(name, major){
        super(name)
        this.major = major
    }

    hasMajor(){
        return !!this.major
    }
}

const khash = new Student('khashahyar', 'Computer Science')
console.log(khash.hasMajor())