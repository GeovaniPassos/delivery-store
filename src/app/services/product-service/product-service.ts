import { computed, inject, Service, signal } from '@angular/core';
import { Products } from '../../models/products';
import { SearchService } from '../search-service/search-service';
import { Router } from '@angular/router';

@Service()
export class ProductService {

  private routes = inject(Router);

  private searchService = inject(SearchService);
  selectedCategory = signal<string | null>(null);

  public readonly products = signal<Products[]>([
    {
      id: 1,
      name: 'Refrigerante',
      description: 'Refrigerante gelado',
      price: 10.99,
      promotionalPrice: 8.99,
      category: 'Bebidas'
    },
    {
      id: 2,
      name: 'Cerveja',
      description: 'Cerveja gelada.',
      price: 12.99,
      promotionalPrice: 10.99,
      category: 'Bebidas'
    },
    {
      id: 3,
      name: 'Suco',
      description: 'Suco gelado',
      price: 8.99,
      category: 'Sucos'
    },
    {
      id: 4,
      name: 'X-burguer',
      description: 'Pão, hamburgue, mussarela',
      price: 18.99,
      category: 'Lanches'
    },
    {
      id: 5,
      name: 'Mussarela',
      description: 'Molho, mussarela e mangericão',
      price: 48.99,
      category: 'Pizzas'
    }
  ]);

  public isSearching = computed(() => {
    return this.searchService.search().trim().length > 0;
  });

  public categories = computed(() => {
    const categoriesList = this.products().map(p => p.category);
      return Array.from(new Set(categoriesList));
  });

  setCategory(category: string | null) {
    this.selectedCategory.set(category);
  }

  filteredProducts = computed(() => {
    const term = this.searchService.search().toLocaleLowerCase().trim();
    const category = this.selectedCategory();

    let result = this.products();

    if (term) {
      return result = result.filter((product) =>
        product.name.toLocaleLowerCase().includes(term) ||
        product.description.toLocaleLowerCase().includes(term)
      );
    }

    if (category) {
      return result = result.filter((product) => 
        product.category === category);
    }
    
    return result;
  });
  
}
