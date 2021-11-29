import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this._FB.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this._FB.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding'],
    ], [Validators.required])
  })

  nuevoFavorito: FormControl = this._FB.control('', Validators.required)

  get FavoritosArr() {
    return (this.miFormulario.get('favoritos') as FormArray);
  }

  constructor(private _FB: FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoEsValido(campo: string): boolean {
    return this.miFormulario.controls[campo].invalid && this.miFormulario.controls[campo].touched
  }

  agregarFavorito(): any {
    if (this.nuevoFavorito.invalid) {
      this.nuevoFavorito.markAsTouched()
      return
    }
    // this.FavoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))
    this.FavoritosArr.push(this._FB.control(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset()
  }

  eliminarFavorito(index: number): void {
    this.FavoritosArr.removeAt(index)
  }


  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
    console.log("Guardado", this.miFormulario.value);

  }

}
