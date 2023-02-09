import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

public labes1: string [] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
public data1 = [[ 350, 450, 100 ]];
public labes2: string [] = [ 'Tacos', 'Pan', 'Cerveza' ];
public data2 = [[ 20, 10, 100 ]];


}
