var x,y,z,a,k,nav;
nav = document.getElementsByTagName('nav')[0];
function loader(){
	setTimeout(function(){ 


			document.getElementsByClassName('fab')[0].className="nav-linker mr-5 nav-link fab fa-github fa-5x";
			document.getElementsByClassName('fab')[1].className="nav-linker mr-5 nav-link fab fa-gitlab fa-5x";
			document.getElementsByClassName('fab')[2].className="nav-linker mr-5 nav-link fab fa-laravel fa-5x";
			document.getElementsByClassName('fab')[3].className="nav-linker mr-5 nav-link fab fa-vuejs fa-5x";
			document.getElementsByClassName('fab')[4].className="nav-linker mr-5 nav-link fab fa-wordpress fa-5x";


		document.getElementById('body').style.background ="none";
		document.getElementById('html').style.background ="none";
		document.getElementById('pre').className ="invisible";
		document.getElementById('body').className ="visible";
		document.getElementById('body').className ="w3-animate-opacity";
		if ( screen.width < 700 ) {
			document.getElementsByClassName("row")[0].className = "mx-auto container-fluid ";
			 k = document.getElementsByClassName("modal-body");
			 x = document.getElementsByClassName("display-1");
			 y = document.getElementsByClassName("content");
			 z = document.getElementsByClassName("fas");
			 f = document.getElementsByClassName('navbar');
			console.log(x, y);
			x[0].className ="white-text display-2 bg-dark border-0 rounded p-2";
			x[0].className ="black-text display-2 bg-light border-0 rounded p-2";
			x[0].className ="white-text display-2 bg-dark border-0 rounded p-2";
			
			y[0].className="content  mr-3 mt-5 col  border  rounded  container";
			y[0].children[0].children[0].className="display-2";
			y[0].children[0].children[1].className="h1";
			y[1].className="content  mr-3 mt-5 col  border  rounded  container"
			y[1].children[0].children[0].className="display-2";
			y[1].children[0].children[1].className="h1";
			y[2].className="content  mr-3 mt-5 col  border  rounded  container"
			y[2].children[0].children[0].className="display-2";
			y[2].children[0].children[1].className="h1";
			y[3].className="content  mr-3 mt-5 mb-5 col  border  rounded  container"
			y[3].children[0].children[0].className="display-2";
			y[3].children[0].children[1].className="h1";

			z[1].className="fas fa-chevron-circle-left red-text fa-3x";
			z[2].className="fas fa-chevron-circle-right blue-text fa-3x";

			a = document.getElementsByTagName('img');
			a[0].src ="img/x2/Pres1.jpg";
			a[0].style.height ="50vh";
			a[1].src ="img/x2/Pres2.jpg";
			a[1].style.height ="50vh";
			a[2].src ="img/x2/Pres3.jpg";
			a[2].style.height ="50vh";

			k[0].children[0].className ="h2";
			k[1].children[0].className ="h2";
			k[2].children[0].className ="h2";
			k[3].children[0].className ="h2";
			k[4].children[0].className ="h2";

			k = document.getElementsByClassName("modal-title");
			k[0].className= "modal-title h1";
			k[1].className= "modal-title h1";
			k[2].className= "modal-title h1";
			k[3].className= "modal-title h1";
			k[4].className= "modal-title h1";
			document.getElementsByClassName("navbar-brand")[0].className="p-3 h2 black-text";
			document.getElementsByTagName("footer")[0].className="h2";
		}

	 }, 3000);
}
var i=0;
function navs(){
	if (scrollY > 50) {
		var v =document.getElementsByClassName("link");
		nav.style.background ="rgba(67,69,67,"+i+")";
					document.getElementsByClassName("fa-layer-group")[0].className="fas fa-layer-group fa-2x text-white";
					v[0].className="nav-link white-text link";
					v[1].className="nav-link white-text link";
					v[2].className="nav-link white-text link";
					v[3].className="nav-link white-text link";
		
				
		
		if (i < 1) {
		i=i + 0.2;
		}
	}else if (scrollY < 50){
		nav.style.background ="rgba(67,69,67,"+i+")";
		var v =document.getElementsByClassName("link");
			v[0].className="nav-link black-text link";
			v[1].className="nav-link black-text link";
			v[2].className="nav-link black-text link";
			v[3].className="nav-link black-text link";
		if (i>0) {
		i=i - 0.5;
		} 
		if (scrollY == 0) {
			document.getElementsByClassName("fa-layer-group")[0].className="fas fa-layer-group fa-2x text-black";
		
			nav.style.background="rgba(255,255,255,0.8)";
		}
	}

}