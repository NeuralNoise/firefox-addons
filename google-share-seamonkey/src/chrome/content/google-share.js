function ShareGoogle(){
	url=window.content.location.href;
	window.open("http://plus.google.com/share?url="+encodeURIComponent(url),"Google+ Share for SeaMonkey","_blank");


}
