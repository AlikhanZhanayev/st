function change(element){
	var a = element.innerHTML;

	switch(a){
		case "Order Online": 
			document.getElementById("img").src = "https://img.pngio.com/online-food-order-png-free-online-food-orderpng-transparent-online-food-ordering-png-584_354.png";
			document.getElementById("text1").innerHTML = "Order Online";
			break;
		case "About us":
			document.getElementById("img").src = "https://brandslogos.com/wp-content/uploads/images/large/gloria-jeans-coffee-logo.png";
			document.getElementById("text1").innerHTML = "About us";

			break;
		case "Coffee":
			document.getElementById("img").src = "https://pngimg.com/uploads/mug_coffee/mug_coffee_PNG97413.png";
			document.getElementById("text1").innerHTML = "Coffee";
			document.getElementById("text2").innerHTML = "New L'Or coffee. Feel the captivating power of its scent. Feel the delicate yet intense taste. Created from specially selected grains. L'Or coffee. Perfect as gold.";
			break;
		case "Contacts": 
			document.getElementById("img").src = "https://cdn.shopify.com/s/files/1/0079/9598/1897/products/phone-sign-md_300x.png?v=1547751265";
			document.getElementById("text1").innerHTML = "Contacts";
	}

				$("#img").animate({ opacity: '1'}, "slow");
	$("#text").animate({opacity: '1'}, "slow");

}
function big(element){
	element.style.fontSize = "30px";
}
function small(element){
	element.style.fontSize = "25px";
}
function load(){
	$(".text").animate({opacity: '1'}, "slow");
	$("#img").animate({ opacity: '1'}, "slow");
}
function opacity(element){
	var b = element.innerHTML;
	switch(b) {
		case "About us":
		$("#img").animate({opacity:"1"}, "slow");
	}
}