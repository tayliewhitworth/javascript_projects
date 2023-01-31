class School {
  constructor(name, level, numberOfStudents) {
    this._name = name
    this._level = level
    this._numberOfStudents = numberOfStudents
  }

  get name() {
    return this._name
  }

  get level() {
    return this._level
  }

  get numberOfStudents() {
    return this._numberOfStudents
  }

  set numberOfStudents(num) {
    if (typeof this._numberOfStudents === 'number') {
      this._numbereOfStudents = num
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} level.`)
  }

  static pickSub(substituteTeachers) {
    const randomNum = Math.floor(Math.random() * substituteTeachers.length)
    return substituteTeachers[randomNum]
  }

}


class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy
  }

  get pickupPolicy() {
    return this._pickupPolicy
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents)
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams
  }

  get sportsTeams() {
    return this._sportsTeams
  }
}

const lorraineH = new Primary('Lorraine Handbury', 514, 'Students must be picked up by a parent, guardian or family member over the age of 13.')

lorraineH.quickFacts()

const sub = School.pickSub(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

console.log(sub)

const alSmith = new HighSchool('Al Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])


const teams = alSmith.sportsTeams
console.log(teams)

for(let i in teams) {
  console.log(teams[i])
}
