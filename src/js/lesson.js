function getCube(numberOne, numberTwo){
	
	if (numberTwo === 1){
		return numberOne;
	}
	else{
		return numberOne + getCube(numberOne, numberTwo - 1);
	}
}

console.log(getCube(2,3));

let someFunction = function(){
	console.log('its work');
}

function creatMessage(text,name){
	return name + ', ' + text + '!';
}

function showMessage(message){
	console.log(message);
}

function inintMessage(text, name){
	showMessage(creatMessage(text, name));
}

inintMessage("У вас одно новое сообщание", "Андрей");

let count = 0;
let time = setTimeout(function(){
	console.log("Hi");
},2000);

let int = setInterval(function(){
	clearTimeout(time);
	console.log("Hi");
	count++;
	if (count === 5){
		clearInterval(int);
	}
},1000);