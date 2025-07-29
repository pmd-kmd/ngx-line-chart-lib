  import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { NgxEchartsDirective } from 'ngx-echarts';
  import type { EChartsOption } from 'echarts';
  @Component({
    selector: 'ngx-lc-line-chart',
    standalone: true, // <--- THIS MUST BE TRUE
    imports: [CommonModule, NgxEchartsDirective],
    template: `
      <div class="line-chart-container" echarts [options]="chartOptions"></div>
    `,
    styles: [`
      .line-chart-container {
        width: 100%;
        height: 400px;
      }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class LineChartComponent implements OnInit, OnChanges {
    @Input() chartData: number[][] = [];
    @Input() chartLabels: string[] = [];
    @Input() chartTitle: string = 'Line Chart';
    @Input() seriesNames: string[] = ['Series 1'];
    chartOptions: EChartsOption = {};
    ngOnInit(): void {
      this.updateChartOptions();
    }
    ngOnChanges(changes: SimpleChanges): void {
      if (changes['chartData'] || changes['chartLabels'] || changes['chartTitle'] || changes['seriesNames']) {
        this.updateChartOptions();
      }
    }
    private updateChartOptions(): void {
      this.chartOptions = {
        title: {
          text: this.chartTitle
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.seriesNames,
          top: 'bottom'
        },
        xAxis: {
          type: 'category',
          data: this.chartLabels,
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        },
        series: this.chartData.map((data, index) => ({
          name: this.seriesNames[index] || `Series ${index + 1}`,
          type: 'line',
          data: data,
          smooth: true
        }))
      };
    }
  }
  