window.onload = function(){
    const pantallaInicio = new SplashScreen();
    pantallaInicio.crear();
    document.addEventListener('keydown',(e)=>{
        pantallaInicio.eliminar();
        document.removeEventListener('keydown',null,false);
    },false);
}