import { Component, computed, inject, input } from '@angular/core';
import { Products } from '../../models/products';
import { ProductService } from '../../services/product-service/product-service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {

  protected productService = inject(ProductService);

}
