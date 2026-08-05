import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaModal } from './pizza-modal';

describe('PizzaModal', () => {
  let component: PizzaModal;
  let fixture: ComponentFixture<PizzaModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaModal],
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
