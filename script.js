function highlight() {
    //Write your code here
	const strongElement = document.querySelectorAll("strong");
	strongElement.forEach(elem =>{
		elem.style.color = 'rgb(0,128,0)';
	})
}


function return_normal() {
    //Write your code here
	const strongElement = document.querySelectorAll("strong");
	strongElement.forEach(elem =>{
		elem.style.color = 'rgb(0,0,0)';
	})
    
}
