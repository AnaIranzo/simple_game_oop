class Personaje{
    x = 10;
    y = 2;
    #personaje = document.createElement("div");//division
    #direccion = null;
  
    crear() {
      const estilos = document.createElement("style");
      estilos.innerHTML = `
      .heroe {
        position: absolute;
        background: url('assets/redhatfiles/png/personaje.png')   ;
        height: 50px;
        width: 50px;
        top: 0;
        transition: transform 300ms;
      }
      `;
      document.head.appendChild(estilos);
      //
      this.#personaje.classList.add("heroe");
      this.#personaje.style.transform = `translate(${this.x * 50}px, ${
        this.y * 50
      }px)`;
  
      const raiz = document.getElementById("root");
      raiz.appendChild(this.#personaje);
    }

    eliminar(){
      this.#personaje.remove();
    }
    mover(direccionNueva, permisoMover){
      this.#direccion = direccionNueva;
      console.log(this.#direccion)
    }
  }