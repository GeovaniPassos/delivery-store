import { Component, effect, input } from '@angular/core';
import { Products } from '../../models/products';

@Component({
  selector: 'app-default-modal',
  imports: [],
  templateUrl: './default-modal.html',
  styleUrl: './default-modal.scss',
})
export class DefaultModal {

  loadOpcionais(productId: number) {
    console.log(`Carregando opcionais para o produto com ID: ${productId}`);
  }

}
