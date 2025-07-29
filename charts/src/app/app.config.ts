import { ApplicationConfig } from '@angular/core';

// Import ECharts core module
import * as echarts from 'echarts/core';

// Import necessary chart types (even if only for type registration, needed for provideEchartsCore)
import { LineChart } from 'echarts/charts';

// Import necessary components
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';

// Import the renderer
import { CanvasRenderer } from 'echarts/renderers';

// Import the provider from ngx-echarts
import { provideEchartsCore } from 'ngx-echarts';

// Register the imported components and charts with ECharts
// This needs to be done at the application level as well for the main app's injector
echarts.use([
  LineChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  CanvasRenderer
]);


export const appConfig: ApplicationConfig = {
  providers: [
    // Provide the ECharts core instance at the root of your application
    provideEchartsCore({ echarts })
  ]
};