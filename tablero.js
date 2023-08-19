const MAX_COLUMNAS = 13;
const MAX_FILAS = 13;
const PARED = 1;
const VACIA = 0;
const PIEDRA = 2;
const ARBUSTO = 3;
const SETA = 4;
const PERSONAJE = 5;
const nivel1 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,5,0,3,3,0,0,0,0,0,0,0,1],
    [1,0,0,2,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,2,0,0,0,1],
    [1,0,0,0,0,4,0,0,0,0,0,0,1],
    [1,0,0,2,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,2,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,2,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
]

class Tablero{
    #contenedor = document.createElement('div'); //propiedad protegida solo es visible dentro de la clase
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
        var id = 'celda-'+heroe.c+'-'+heroe.r;
        document.getElementById(id).classList.remove('personaje');
        document.getElementById(id).classList.add('bomba');
    }

}