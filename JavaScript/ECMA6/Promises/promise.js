let tvShows = [{name: "Dr House"}, {name: "Whatever"}];

let displayShows = new Promise((resolve, reject)=>{
	let rand = Math.floor(Math.random()*2);
	console.log(rand);
	if(rand === 0){
		resolve(tvShows)
	}else{
		reject({name: "err", message: "fix it!"})
	}
})
displayShows.then(resolved, rejected).catch(rejected)

function resolved(){
	console.log(tvShows)
}

function rejected(reject){
	console.log(reject)
}