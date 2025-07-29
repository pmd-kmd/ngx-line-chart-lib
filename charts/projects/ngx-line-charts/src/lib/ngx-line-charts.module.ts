import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  LineChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  CanvasRenderer
]);

import { LineChartComponent } from './line-chart.component';

@NgModule({
  declarations: [], // <--- KEEP THIS EMPTY
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({ echarts }),
    LineChartComponent 
  ],
  exports: [ 
    LineChartComponent 
  ]
})
export class NgxLineChartsModule { }