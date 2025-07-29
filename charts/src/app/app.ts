// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import the LineChartComponent directly from your new library
import { LineChartComponent } from 'ngx-line-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LineChartComponent // Add your standalone library component to imports
  ],
  templateUrl: './app.html', // <--- CHANGE THIS LINE
  styleUrls: [`./app.scss`] // <--- CHANGE THIS LINE if you use .css, or .scss if you use .scss
})
export class App {
  title = 'My Application with Custom Line Charts xdcvfdxh';
  // No need for chartOptions here anymore, as the LineChartComponent handles it internally
}