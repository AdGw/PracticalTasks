class Media{
	constructor(type, name){
		this.type = type;
		this.name = name;
	}
	getFullName(){
		return `${this.type} (${this.name})`
	}
}

const media = new Media("Let It Be", "The Beatles")
console.log(media.getFullName())