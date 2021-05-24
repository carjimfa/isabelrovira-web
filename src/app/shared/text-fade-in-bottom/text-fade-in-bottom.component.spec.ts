import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFadeInBottomComponent } from './text-fade-in-bottom.component';

describe('TextFadeInBottomComponent', () => {
  let component: TextFadeInBottomComponent;
  let fixture: ComponentFixture<TextFadeInBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFadeInBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFadeInBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
