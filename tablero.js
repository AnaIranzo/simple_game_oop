

class Tablero{
    #contenedor = document.createElement('div'); //propiedad protegida solo es visible dentro de la clase
    #idAnimacion = null;
    crear(){
        this.#contenedor.classList.add('tablero');

        const raiz = document.getElementById('root');
        raiz.appendChild(this.#contenedor);
        var i = 0;
        var a,b;

        for (let r = 0; r < MAX_FILAS; r++) {
            for (let c = 0; c < MAX_COLUMNAS; c++) {
                b = document.createElement('div'); 
                a = document.createAttribute('id');
                
                a.value = 'celda-'+c+'-'+r;
                b.setAttributeNode(a);

                a = document.createAttribute('class');
                if(nivel1[c][r]==PARED){
					a.value = "celda pared";
				} else if(nivel1[c][r]==PIEDRA){
					a.value = "celda piedra";
				} else if(nivel1[c][r]==ARBUSTO){
					a.value = "celda arbusto";
				} else if(nivel1[c][r]==SETA){
					a.value = "celda seta";
				} else if(nivel1[c][r]==PERSONAJE){
					a.value = "celda personaje";
				} else{
					a.value = "celda";
				}
                b.setAttributeNode(a);

                this.#contenedor.appendChild(b);
            }            
        }
        
    }

    bomba(){
        var id = 'celda-'+heroe.c+'-'+heroe.r;//pasamos la posicion del heroe
        document.getElementById(id).classList.remove('personaje');//quitamos personaje
        document.getElementById(id).classList.add('bomba');//ponemos bomba
        this.#animacion(id);
    }
    #animacion(id){
		let cuadro = 1;
		let celda = document.getElementById(id);

		const animacion = () =>{
			celda.classList.remove(`bomba-${cuadro}`);
			cuadro++;
			if (cuadro>heroe.explosion) {
				this.#detenerExplosion(id);
			}
			celda.classList.add(`bomba-${cuadro}`);
		}
		this.#idAnimacion = setInterval(animacion,heroe.t);
	}

	#detenerExplosion(id){
		let celda = document.getElementById(id);
		celda.classList.remove("bomba", "bomba-7");
		celda.classList.add(`personaje`);
		window.clearInterval(this.#idAnimacion);
	}

    

}