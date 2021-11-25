"use strict";

function between(x, min, max) {
  return x >= min && x <= max;
}
setTimeout(
	() =>{
		let site = prompt("Какой тип сайта Вам нужен?\n1. сайт-визитка\n2. интернет-магазин\n3. форум\n4. авторский блог\n5. другое", '');
		if (between(site,1,5)==true){
			console.log(site);
		}
		else{
			while(between(site,1,5)==false){
				alert("Выберите цифру");
				let site = prompt("Какой тип сайта Вам нужен?\n1. сайт-визитка\n2. интернет-магазин\n3. форум\n4. авторский блог\n5. другое", '');
				continue;
			}
			console.log(site);
		}
		let design = prompt("Какой нужен дизайн для сайта?\n1. шаблонный\n2. уникальный\n3. эксклюзивный", '');
		if (design>=1 && design<=3){
			console.log(design);
		}
		else{
			alert("Выберите цифру");
		}

		let adaptive = prompt("Выберите тип верстки:\n1. адаптивный (просмотр с мобильных устройств)\n2. адаптивный", '');
		if (adaptive>=1 && adaptive<=2){
			console.log(adaptive);
		}
		else{
			alert("Выберите цифру");
		}
	}, 5000
	);


