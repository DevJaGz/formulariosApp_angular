import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface IPersona {
  nombre: string;
  favoritos: IFavorito[];
}

interface IFavorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('formulario') formulario!: NgForm;

  persona: IPersona = {
    nombre: 'Julian',
    favoritos: [
      { id: 1, nombre: 'Apex Legends' },
      { id: 2, nombre: 'Call of Duty' },
    ]
  }

  nuevoJuego: string = "";

  showWarning(field: string) {

    let pCondition = false
    switch (field) {
      case 'nombre':
        pCondition = this.formulario?.controls[field]?.invalid
        break;

    }
    const condition =
      pCondition &&
      this.formulario?.controls[field]?.touched
    return condition

  }

  showWarningFavoritos(field: string) {

    let pCondition = false
    for (let i = 0; i < this.persona.favoritos.length; i++) {

      if (field === `favorito_${i}`) {
        pCondition = this.formulario?.controls[field]?.invalid
        break;
      }

    }
    const condition =
      pCondition &&
      this.formulario?.controls[field]?.touched

    return condition
  }

  agregar() {
    const favorito: IFavorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({ ...favorito })
    this.nuevoJuego = ""
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  guardar() {
    console.log("Formulario Guardado!");
    console.log(this.formulario);

  }

}
