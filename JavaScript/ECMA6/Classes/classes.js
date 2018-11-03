
// class Media{
// 	constructor(type, name, author){
// 		this.type = type;
// 		this.name = name;
// 		this.author = author;
// 	}
// 	getFullName(){
// 		return `${this.name} (${this.author})`
// 	}
// }

// class Song extends Media{
// 	constructor(name, author){
// 		super('song', name, author);

// 	}
// }

// const song = new Song("Let It Be", "The Beatles")
// console.log(song.getFullName())


class Media{
	constructor(type, name, author){
		this.type = type;
		this.name = name;
	}
	getFullName(){
		return `${this.type} (${this.name})`
	}
}

const media = new Media("Let It Be", "The Beatles")
console.log(media.getFullName())