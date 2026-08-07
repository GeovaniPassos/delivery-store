import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  selector: 'app-pizza-modal',
  imports: [MatExpansionModule, A11yModule],
  templateUrl: './pizza-modal.html',
  styleUrl: './pizza-modal.scss',
})
export class PizzaModal {
  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }
}
