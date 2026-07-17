import { Component, signal } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { Products } from '../../../models/products';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatIcon],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  protected readonly products = signal<Products[]>([
    {
      id: 1,
      name: 'Pizza Marguerita',
      description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.',
      price: 39.99,
      promotionalPrice: 59.99,
      category: 'Pizzas'
    },
    {
      id: 2,
      name: 'Pizza Pepperoni',
      description: 'Pizza with tomato sauce, mozzarella cheese, and pepperoni slices.',
      price: 44.99,
      promotionalPrice: 64.99,
      category: 'Pizzas'
    },
    {
      id: 3,
      name: 'Pizza Vegetariana',
      description: 'Pizza with tomato sauce, mozzarella cheese, and a variety of vegetables.',
      price: 49.99,
      category: 'Pizzas'
    }
  ]);

}