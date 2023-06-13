class SplashScreen{
    #contenedor = document.createElement('div'); //propiedad protegida solo es visible dentro de la clase
    crear(){
        this.#contenedor.classList.add('splashScreen', 'splashScreen-1');

        const raiz = document.getElementById('root');
        raiz.appendChild(this.#contenedor);
        
    }
    eliminar(){

    }
}