const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LocalStorage = "crrentUser",
    SHOWING_ClassName = "showing";
	
	
function paintGreeing(text) {
    form.classList.remove(SHOWING_ClassName);
    greeting.classList.add(SHOWING_ClassName);
	greeting.innerText = `Hello ${text}`;
}	
	
	
	
function loadName() {
	const currentUser = localStorage.getItem(USER_LocalStorage);
	if(currentUser===null){ // 사용자의 정보가 null 일때
		
	}else{ // 사용자의 정보가 있을때 
		paintGreeing(currentUser);
	}
}






function init() {
	
}

init();