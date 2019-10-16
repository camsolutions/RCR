var x;
function loader(){
	setTimeout(function(){ 
		document.getElementById('body').style.background ="none";
		document.getElementById('html').style.background ="none";
		document.getElementById('pre').className ="invisible";
		document.getElementById('body').className ="visible";
		document.getElementById('body').className ="w3-animate-opacity";
		if ( screen.width < 500 ) {
			document.getElementsByClassName("row")[0].className = "mx-auto container-fluid text-white";

			 x = document.getElementsByClassName("display-1");
			 y = document.getElementsByClassName("content");
			 z = document.getElementsByClassName("fas");
			console.log(x, y);
			x[0].className ="white-text display-2 bg-dark border-0 rounded p-2";
			x[0].className ="black-text display-2 bg-light border-0 rounded p-2";
			x[0].className ="white-text display-2 bg-dark border-0 rounded p-2";
			
			y[0].className="content  mr-3 mt-5 col  border  rounded  container";
			y[0].children[0].className="display-2";
			y[0].children[1].className="h1";
			y[0].className="content  mr-3 mt-5 col  border  rounded  container"
			y[1].children[0].className="display-2";
			y[1].children[1].className="h1";
			y[0].className="content  mr-3 mt-5 col  border  rounded  container"
			y[2].children[0].className="display-2";
			y[2].children[1].className="h1";
			
			y[3].children[0].className="display-2";
			y[3].children[1].className="h1";

			z[0].className="fas fa-chevron-circle-left red-text fa-2x";
			z[1].className="fas fa-chevron-circle-right blue-text fa-2x";
		}

	 }, 3000);
}

