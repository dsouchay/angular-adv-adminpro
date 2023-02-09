import { Component, Input } from '@angular/core';
import { ChartType} from 'chart.js';
import { MultiDataSet, Label, Colors} from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() titulo: string = ' Sin título';
  @Input('labels') doughnutChartLabels: Label[] = ['valor1', 'valor2', 'valor3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [ 350, 450, 100 ],
  ];
  public colors: Colors[] =[
    {backgroundColor: ['#9E120E', '#FF5800', '#FFB414']}
  ]


  public doughnutChartType: ChartType = 'doughnut';
}
