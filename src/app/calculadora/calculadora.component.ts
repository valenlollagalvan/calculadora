import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  operar: Array<string | number> = [];

  resultado! :number;

  appendInput(input: string | number) {
    this.operar.push(input);
  }
  
  clear () {
    this.operar= []
  }

  calcular() {
    let resultado = this.operar.join('');
    try {
      this.operar = [eval(resultado)];
    } catch (e) {
      this.operar = ["ocurrio un ERROR"];
    }
    
  }
}
