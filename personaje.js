class Personaje{
    x = 10;
    y = 2;
    #personaje = document.createElement("div");
  
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
  }