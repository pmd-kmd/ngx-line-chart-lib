import { ApplicationConfig, importProvidersFrom  } from '@angular/core';

import { NgxLineChartsModule } from 'ngx-line-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    // Provide the ECharts core instance at the root of your application
    importProvidersFrom(NgxLineChartsModule)
  ]
};