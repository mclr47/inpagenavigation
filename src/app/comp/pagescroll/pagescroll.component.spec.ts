import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagescrollComponent } from './pagescroll.component';

describe('PagescrollComponent', () => {
  let component: PagescrollComponent;
  let fixture: ComponentFixture<PagescrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagescrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagescrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
