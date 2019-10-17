var x,y,z,a,nav;
nav = document.getElementsByTagName('nav')[0];
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
			 z = document.getElementsByClassName("fas");
			 f = document.getElementsByClassName('navbar');
			console.log(x, y);
			x[0].className ="white-text display-2 bg-dark border-0 rounded p-2";
			x[0].className ="black-text display-2 bg-light border-0 rounded p-2";
			x[0].className ="white-text display-2 bg-dark border-0 rounded p-2";
			
			y[0].className="content  mr-3 mt-5 col  border  rounded  container";
			y[0].children[0].className="display-2";
			y[0].children[1].className="h1";
			y[1].className="content  mr-3 mt-5 col  border  rounded  container"
			y[1].children[0].className="display-2";
			y[1].children[1].className="h1";
			y[2].className="content  mr-3 mt-5 col  border  rounded  container"
			y[2].children[0].className="display-2";
			y[2].children[1].className="h1";
			y[3].className="content  mr-3 mt-5 col  border  rounded  container"
			y[3].children[0].className="display-2";
			y[3].children[1].className="h1";

			z[0].className="fas fa-chevron-circle-left red-text fa-3x";
			z[1].className="fas fa-chevron-circle-right blue-text fa-3x";

			a = document.getElementsByTagName('img');
			a[0].src ="img/x2/Pres1.jpg";
			a[0].style.height ="50vh";
			a[1].src ="img/x2/Pres2.jpg";
			a[1].style.height ="50vh";
			a[2].src ="img/x2/Pres3.jpg";
			a[2].style.height ="50vh";

		}

	 }, 3000);
}
var i=0;
function navs(){
	if (scrollY > 50) {
		var f =document.getElementsByClassName("nav-link black-text");
		nav.style.background ="rgba(67,69,67,"+i+")";
		if (f[1] != undefined ) {
		f[0].className="nav-link white-text";
		f[0].className="nav-link white-text";
		f[0].className="nav-link white-text";
		f[0].className="nav-link white-text";
		}
		if (i < 1) {
		i=i + 0.2;
		}
	}else if (scrollY < 50){
		var f =document.getElementsByClassName("nav-link white-text");
		nav.style.background ="rgba(67,69,67,"+i+")";
		if (f[1] != undefined ) {
		f[0].className="nav-link black-text";
		f[0].className="nav-link black-text";
		f[0].className="nav-link black-text";
		f[0].className="nav-link black-text";
		}
		if (i>0) {
		i=i - 0.5;
		} 
		if (scrollY == 0) {
			nav.style.background="rgba(255,255,255,0.8)";
		}
	}

}