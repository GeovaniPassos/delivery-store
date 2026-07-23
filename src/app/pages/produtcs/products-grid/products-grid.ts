import { Component, signal } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { Products } from '../../../models/products';
import { MatIcon } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { SearchFilter } from '../../../shared/search-filter/search-filter';
import { SearchService } from '../../../services/searchService/search-service';

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatIcon, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  constructor(
    public searchService: SearchService
  ){}

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