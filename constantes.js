const direccion = {
    ARRIBA: 'arriba',
    ABAJO: 'abajo',
    IZQUIERDA: 'izquierda',
    DERECHA: 'derecha'
};

const flechas = {
    ArrowUp: 'arriba',
    ArrowDown: 'abajo',
    ArrowLeft: 'izquierda',
    ArrowRight: 'derecha'
}


const MAX_CUADRO = 2;
const TIEMPO = 250;

const MAX_COLUMNAS = 13;
const MAX_FILAS = 13;
const PARED = 1;
const VACIA = 0;
const PIEDRA = 2;
const ARBUSTO = 3;
const SETA = 4;
const PERSONAJE = 5;
const heroe = {c:1, r:1, explosion:7, t:200}// objeto con las coordenadas del heroe, en el 00 esta el marco
const nivel1 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,3,3,0,0,0,0,0,0,0,1],
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