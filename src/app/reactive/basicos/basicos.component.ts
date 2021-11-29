import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // });

  miFormulario: FormGroup = this._FB.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  })

  constructor(private _FB: FormBuilder) { }

  ngOnInit(): void {
  }

  campoNoEsValido(campo: string): boolean {
    return this.miFormulario.controls[campo].invalid && this.miFormulario.controls[campo].touched
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
    this.miFormulario.reset({
      nombre: "RTX 4080ti"
    })
    console.log("Formulario guardado", this.miFormulario);

  }

}
