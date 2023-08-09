const pantallaInicio = new SplashScreen();
const tablero = new Tablero();


window.onload = function(){
    pantallaInicio.crear();
    document.addEventListener('keydown',borrarSplashScreen,false);
}

function borrarSplashScreen(e) {
    pantallaInicio.eliminar();
    document.removeEventListener('keydown', borrarSplashScreen, false);
    tablero.crear();
}