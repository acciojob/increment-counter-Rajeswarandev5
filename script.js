//your JS code here. If required.
let counter = 0;
let counterElement = document.getElementById("counter");
let incrementBtn = document.getElementById("IncrementBtn");

incrementBtn.addEventListener("click", function(){
	alert(counter);
	counter++;
	counterElement.textContent = counter;
})