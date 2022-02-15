import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackCalculatorComponent } from './attack-calculator.component';

describe('AttackCalculatorComponent', () => {
  let component: AttackCalculatorComponent;
  let fixture: ComponentFixture<AttackCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
