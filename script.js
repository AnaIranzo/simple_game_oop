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
		const direccion = flechas[event.key];
  		if(tecla==" "){ //si barra espaciadora bomba
  			tablero.bomba();
  		} else if(!direccion){
			return;
		}
		personaje.mover(direccion, true); // le pasamos la direccion y el true para tomar como valido ese movimiento
	}


