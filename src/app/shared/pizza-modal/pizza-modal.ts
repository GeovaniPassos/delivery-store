import { Component, inject, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { A11yModule } from "@angular/cdk/a11y";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIcon } from "@angular/material/icon";
import { MatFormField } from "@angular/material/input";
import { ProductsCard } from "../../pages/produtcs/products-card/products-card";
import { Products } from '../../models/products';
import { ProductService } from '../../services/product-service/product-service';

@Component({
  selector: 'app-pizza-modal',
  imports: [MatExpansionModule, A11yModule, MatCheckboxModule, MatRadioModule, MatIcon, ProductsCard],
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

  protected productService = inject(ProductService);

}
