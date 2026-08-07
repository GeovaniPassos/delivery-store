import { Component,  inject, signal } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { Products } from '../../../models/products';
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../services/cart-service/cart-service';
import { ProductService } from '../../../services/product-service/product-service';
import { PizzaModal } from '../../../shared/pizza-modal/pizza-modal';
import { DefaultModal } from "../../../shared/default-modal/default-modal";
import { CategoryService } from '../../../services/category-service/category-service';

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatIcon, MatInputModule, MatFormFieldModule, FormsModule, PizzaModal],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  private cartService = inject(CartService);
  protected productService = inject(ProductService);
  protected categoryService = inject(CategoryService);
  
  products = this.productService.filteredProducts;

  protected onAddToCard(product: Products) {
    this.cartService.addToCart(product);
  }

}
