const MAX_CUADRO = 2;
const TIEMPO = 250;

class SplashScreen{
    #contenedor = document.createElement('div'); //propiedad protegida solo es visible dentro de la clase
    #idAnimacion = null
    crear(){
        this.#contenedor.classList.add('splashScreen', 'splashScreen-1');

        const raiz = document.getElementById('root');
        raiz.appendChild(this.#contenedor);

        this.#animacion();
        
    }
    eliminar(){
        this.#contenedor.remove();
        window.clearInterval(this.#idAnimacion);
        
    }

    #animacion(){
        let cuadro = 1;

        const animacion = () => {
            this.#contenedor.classList.remove(`splashScreen-${cuadro}`);
            cuadro ++;
            if (cuadro > MAX_CUADRO) {
                cuadro = 1;
            }
            this.#contenedor.classList.add(`splashScreen-${cuadro}`);
        }
        this.#idAnimacion = setInterval(animacion, TIEMPO);
    }

}