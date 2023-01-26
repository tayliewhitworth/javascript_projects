class Media {
  constructor(title) {
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
  }

  get title() {
    return this._title
  }

  get isCheckedOut() {
    return this._isCheckedOut
  }

  get ratings() {
    return this._ratings
  }

  set isCheckedOut(checkedOut) {
    this._isCheckedOut = checkedOut
  }

  getAverageRating() {
    let rateSum = this._ratings.reduce((current, rating) => current + rating, 0)
    let arrLength = this._ratings.length
    return rateSum / arrLength
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut
  }

  addRating(num) {
    if (num <= 5) {
      this._ratings.push(num)
    } else {
      console.log(`Sorry, ${num} isn't between 1 & 5`)
    }
  }
}


class Book extends Media {
  constructor(title, author, pages) {
    super(title)
    this._author = author
    this._pages = pages
  }

  get author() {
    return this._author
  }

  get pages() {
    return this._pages
  }
}


class Movie extends Media {
  constructor(title, director, runTime) {
    super(title)
    this._director = director
    this._runTime = runTime
  }

  get director() {
    return this._director
  }

  get runTime() {
    return this._runTime
  }

}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title)
    this._artist = artist
    this._songs = songs
  }

  get artist() {
    return this._artist
  }

  get songs() {
    return this._songs
  }

  shuffle() {
    let shuffledSongs = [...this._songs]
    let j;
    for (let i = shuffledSongs.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]]
    }
    return shuffledSongs
  }
}

// instances

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(4)
let avg = historyOfEverything.getAverageRating()
console.log(avg)

const speed = new Movie('Speed', 'Jan de Bont', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(3)
speed.addRating(9)
let speedAvg = speed.getAverageRating()
console.log(speedAvg)

const tswift = new CD('All to well', 'Taylor Swift', ['Our song', 'Picture To Burn', 'All to well', 'Red'])
console.log(tswift.shuffle())
