import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingViewComponent } from './scrolling-view.component';

describe('ScrollingViewComponent', () => {
  let component: ScrollingViewComponent;
  let fixture: ComponentFixture<ScrollingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
