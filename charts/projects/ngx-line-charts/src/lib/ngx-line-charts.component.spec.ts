import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLineChartsComponent } from './ngx-line-charts.component';

describe('NgxLineChartsComponent', () => {
  let component: NgxLineChartsComponent;
  let fixture: ComponentFixture<NgxLineChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxLineChartsComponent]
    });
    fixture = TestBed.createComponent(NgxLineChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
