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
import { ProductService } from '../../../services/product-service/product-service';

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatIcon, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  private searchService = inject(SearchService);
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  protected readonly filteredProducts = computed(() => {
    const term = this.searchService.search().toLocaleLowerCase().trim();
    if (!term) return this.productService.products();

    return this.productService.products().filter((product) =>
      product.name.toLocaleLowerCase().includes(term) ||
      product.description.toLocaleLowerCase().includes(term)
    );
  });

  protected onAddToCard(product: Products) {
    this.cartService.addToCart(product);
  }
}
