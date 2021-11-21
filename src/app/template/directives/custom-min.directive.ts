import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
   selector: '[customMin][ngModel]',
   providers: [{
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true
   }]

})
export class CustomMinDirective implements Validator {
   // Parámetro de entradas 
   @Input() minimo!: number;

   /**
    *
    */
   constructor() {
      // Undefined por que el no se ha inicializado la variable al crear el componente
      // console.log("Directiva CustomMinDirectory minValue:", this.minimo);

   }

   validate(control: FormControl) {
      // Valor Actual
      const inputValue = control.value;
      // console.log("Validator validate:", inputValue);
      // console.log("Validator validate minValue:", this.minimo);
      return (inputValue < this.minimo) ? { 'customMin': true } : null;
   }

}