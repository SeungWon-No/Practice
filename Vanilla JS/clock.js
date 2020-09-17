const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	// 시,분,초가 10보다 작으면 앞에 0을 붙여주고 그렇지 않으면 그대로 출력하게 하는 삼항연산자
}


function init() {
	getTime();					// 먼저 시간을 받아온 뒤에 setInterval 함수를 통해 시간을 갱신
	setInterval(getTime, 1000);
}

init();