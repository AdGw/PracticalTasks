let movies = {
	'pirates' :{
		place: [],
		cast: []
	},
	'transformers':{
		place: [],
		cast:[]
	}
};

function setCast(name, ...actors){
	actors.forEach((actor)=>movies[name].cast.push(actor));
}

function setPlace(name, ...places){
	places.forEach((location)=>movies[name].place.push(location));
}

setCast('pirates','Johny Depp');
setCast('transformers','Anthony Hopkins');

setPlace('pirates','Australia');
setPlace('transformers','USA');

console.log(movies)

