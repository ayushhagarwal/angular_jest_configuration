import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumNumbersComponent } from './sum-numbers.component';

describe('SumNumbersComponent', () => {
  let component: SumNumbersComponent;
  let fixture: ComponentFixture<SumNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumNumbersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SumNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two negative numbers correctly', () => {
    const result = component.addTwoNumbers(-2, -3);
    expect(result).toBe(-5);
  });

  it('should handle zero values', () => {
    const result = component.addTwoNumbers(0, 0);
    expect(result).toBe(0);
  });
});
