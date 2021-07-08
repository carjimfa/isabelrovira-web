import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTwoColumnsComponent } from './layout-two-columns.component';

describe('LayoutTwoColumnsComponent', () => {
  let component: LayoutTwoColumnsComponent;
  let fixture: ComponentFixture<LayoutTwoColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTwoColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTwoColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
