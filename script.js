const pantallaInicio = new SplashScreen();
	const tablero = new Tablero();
	const personaje = new Personaje();
	window.onload = function() {
		pantallaInicio.crear();
		document.addEventListener("keydown",borraSplashScreen, false);
	}
	function borraSplashScreen(e){
		pantallaInicio.eliminar();
		document.removeEventListener("keydown",borraSplashScreen,false);
		tablero.crear();
		personaje.crear();
		document.addEventListener("keydown",detectarTeclado, false);
	}
	function detectarTeclado(e) {
		const tecla = event.key;
  		if(tecla==" "){
  			tablero.bomba();
  		}
	}


