import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboModal } from './combo-modal';

describe('ComboModal', () => {
  let component: ComboModal;
  let fixture: ComponentFixture<ComboModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ComboModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
