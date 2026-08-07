import { inject, Service } from '@angular/core';
import { Products } from '../../models/products';
import { Router } from '@angular/router';
import { SearchService } from '../search-service/search-service';

@Service()
export class CategoryService {

  private searchService = inject(SearchService);
  
  routes = inject(Router);

  selectedProductClick(product: Products) {
    if (product.type === 'pizza') {
      this.routes.navigate(['/pizzas']);
      this.searchService.clearSearch();
    } else if (product.type === 'combos') {
      this.routes.navigate(['/combos']);
      this.searchService.clearSearch();
    } else {
      this.routes.navigate(['/opcionais']);
      this.searchService.clearSearch();
    }
  }
}
