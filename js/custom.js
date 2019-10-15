function loader(){
	setTimeout(function(){ 
		document.getElementById('body').style.background ="none";
		document.getElementById('html').style.background ="none";
		document.getElementById('pre').className ="invisible";
		document.getElementById('body').className ="visible";
		document.getElementById('body').className ="w3-animate-opacity";
		if ( screen.width < 700 ) {
			document.getElementsByClassName("row")[0].className = "mx-auto container-fluid text-white"
		}

	 }, 3000);
}

