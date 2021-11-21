import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit, AfterContentInit, AfterViewInit, AfterViewChecked {
  // ! Le dice a typescript que no va a ser Null, que confie en mi
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: null
  }


  constructor() { }

  ngOnInit(): void {
    // undefined
    // console.log("Formulario ngOnInit:", this.miFormulario)
  }

  ngAfterContentInit(): void {
    // undefined
    // console.log("Formulario ngAfterContentInit:", this.miFormulario)
  }

  ngAfterViewInit(): void {
    // creado pero sin valores
    // console.log("Formulario AfterViewInit:", this.miFormulario)
  }

  ngAfterViewChecked(): void {
    // creado con valores    
    // console.log("Formulario ngAfterViewChecked:", this.miFormulario)
  }

  showWarning(field: string): boolean {

    let pCondition = false;
    switch (field) {
      case 'producto':
        pCondition = this.miFormulario?.controls[field]?.invalid;
        break;

      case 'precio':
        pCondition = this.miFormulario?.controls?.precio?.value < 0 || this.miFormulario?.controls[field]?.invalid;
        break;
    }

    // ? Si existe (Si no es undefined) entonces continúe evaluando
    const condition =
      pCondition &&
      this.miFormulario?.controls[field]?.touched

    return condition
  }

  guardar(miFormulario: NgForm) {
    console.log(miFormulario)
    console.log(this.miFormulario)
    console.log("DATOS GUARDADOS!");
    // this.miFormulario.resetForm();
    this.miFormulario.resetForm({
      producto: "",
      precio: 0,
      existencias: 0
    });
  }

}
