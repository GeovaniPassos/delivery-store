import { Component, computed, inject, signal } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { Products } from '../../../models/products';
import { MatIcon } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { SearchFilter } from '../../../shared/search-filter/search-filter';
import { SearchService } from '../../../services/search-service/search-service';
import { CartService } from '../../../services/cart-service/cart-service';

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatIcon, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  private searchService = inject(SearchService);
  private cartService = inject(CartService);

  //Produtos exemplo
  protected readonly products = signal<Products[]>([
    {
      id: 1,
      name: 'Refrigerante',
      description: 'Refrigerante gelado',
      price: 10.99,
      promotionalPrice: 8.99,
      category: 'Bebidas'
    },
    {
      id: 1,
      name: 'Cerveja',
      description: 'Cerveja gelada.',
      price: 12.99,
      promotionalPrice: 10.99,
      category: 'Bebidas'
    },
    {
      id: 1,
      name: 'Suco',
      description: 'Suco gelado',
      price: 8.99,
      category: 'Bebidas'
    }
  ]);

  protected readonly filteredProducts = computed(() => {
    const term = this.searchService.search().toLocaleLowerCase().trim();
    if (!term) return this.products();

    return this.products().filter((product) => 
      product.name.toLocaleLowerCase().includes(term) ||
      product.description.toLocaleLowerCase().includes(term)
    );
  });

  protected onAddToCard(product: Products) {
    this.cartService.addToCart(product);
  }
}