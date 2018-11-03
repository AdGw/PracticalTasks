function welcome(){
	console.log(`Hello: ${this.name}`);
}

let users = [

	{name: "a"},
	{name: "b"},
	{name: "c"},
	{name: "d"}
]

users.forEach(user => welcome.call(user))

function main(){
	for(let i in users){
		console.log("Hello:",users[i].name)
	}
}

main();

////

let article = {title: "This"}

function fetchData(){
	console.log(this.title)
}

fetchData.call(article)
fetchData.apply(article)

let bound = fetchData.bind(article);
bound();

class Article{
	constructor(title){
		this.title = title
	}
	getTitle(){
		console.log(this)
	}
}

let book = new Article('x')
book.getTitle();