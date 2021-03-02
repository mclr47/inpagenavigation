import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingViewTableComponent } from './scrolling-view-table.component';

describe('ScrollingViewTableComponent', () => {
  let component: ScrollingViewTableComponent;
  let fixture: ComponentFixture<ScrollingViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingViewTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
