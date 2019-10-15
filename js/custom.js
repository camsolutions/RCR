var x;
function loader(){
	setTimeout(function(){ 
		document.getElementById('body').style.background ="none";
		document.getElementById('html').style.background ="none";
		document.getElementById('pre').className ="invisible";
		document.getElementById('body').className ="visible";
		document.getElementById('body').className ="w3-animate-opacity";
		if ( screen.width < 700 ) {
			document.getElementsByClassName("row")[0].className = "mx-auto container-fluid text-white";

			 x = document.getElementsByClassName("display-1");
			 y = document.getElementsByClassName("content");
			console.log(x, y);
			x[0].className ="white-text display-2 bg-dark border-0 rounded p-2";
			x[0].className ="black-text display-2 bg-light border-0 rounded p-2";
			x[0].className ="white-text display-2 bg-dark border-0 rounded p-2";
			
			y[0].children[0].className="display-3";
			y[0].children[1].className="h3";
			y[1].children[0].className="display-3";
			y[1].children[1].className="h3";
			y[2].children[0].className="display-3";
			y[2].children[1].className="h3";
			y[3].children[0].className="display-3";
			y[3].children[1].className="h3";

		}

	 }, 3000);
}

