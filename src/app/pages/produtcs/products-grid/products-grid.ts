import { Component,  inject } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { Products } from '../../../models/products';
import { MatIcon } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CartService } from '../../../services/cart-service/cart-service';
import { ProductService } from '../../../services/product-service/product-service';

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, MatIcon, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  private cartService = inject(CartService);
  protected productService = inject(ProductService);

  products = this.productService.filteredProducts;

  protected onAddToCard(product: Products) {
    this.cartService.addToCart(product);
  }

  onProductClick(product: Products) {
    console.log("Clicked product: " + product.name);

    if (product.type === 'pizza') {
      this.openPizzaModal(product);
    } else {
      this.openDefaultModal(product);
    }
  }

  openPizzaModal(product: Products) {
    console.log("pizza modal");
  }

  openDefaultModal(product: Products) {
    console.log("default modal ");
  }

}
