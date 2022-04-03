import {Component, OnInit, ViewChild} from '@angular/core';
import { ChartEvent, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public doughnutChartLabels1: string[] = ['Fuma', 'Cancer','Alguma Patologia','Precisa visita Medica', 'Remedio Controlado'];
  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels1,
    datasets: [
      { data: [ 350, 450, 100, 450, 100 ], 
        backgroundColor: ['#969696', '#0580FF','#F0AD4A','red','pink'] ,
        hoverBackgroundColor: ['#969696', '#0580FF','#F0AD4A','red','pink'],
        hoverBorderColor: ['#969696', '#0580FF','#F0AD4A','red','pink'],
        borderWidth: 5}
    ]
  };

  public doughnutChartLabels: string[] = ['Masculino', 'Feminino'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450 ], 
        backgroundColor: ['#969696', '#0580FF'] ,
        hoverBackgroundColor: ['#969696', '#0580FF'],
        hoverBorderColor: ['#969696', '#0580FF'],
        borderWidth: 5}
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor(
  ) { }

  ngOnInit(): void {}

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
}