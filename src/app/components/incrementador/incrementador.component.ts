import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';
  @Output('valor') emiteValor = new EventEmitter<number>();


 cambiarValor(valor:number){
  if (valor>=0 && this.progreso >=100){
    this.emiteValor.emit(100);
    return this.progreso = 100;
  }
  if (valor < 0 && this.progreso <=0){
    this.emiteValor.emit(0);
    return this.progreso = 0;
  }
  this.progreso = this.progreso + valor;
  this.emiteValor.emit(this.progreso);
  return
 }

 onChanges(newValue: number){
 if (newValue>= 100) {
  newValue= 100;
} else if (newValue<= 0) {
  newValue = 0;
}

this.emiteValor.emit(newValue);
 }

}
