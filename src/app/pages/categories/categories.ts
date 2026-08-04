import { Component, computed, inject, } from '@angular/core';
import { ProductService } from '../../services/product-service/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {

  routes = inject(Router);

  protected productService = inject(ProductService);

  onCategoryClick(cat: string) {
    this.productService.setCategory(cat);

    this.routes.navigate(['/produtos']);
  }
}
