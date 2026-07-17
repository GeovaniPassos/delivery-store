import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Products } from '../../../models/products';

@Component({
  selector: 'app-products-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './products-card.html',
  styleUrl: './products-card.scss',
})
export class ProductsCard {

  readonly product = input.required<Products>();

}
