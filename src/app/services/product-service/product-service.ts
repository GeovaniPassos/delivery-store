import { computed, Service, signal } from '@angular/core';
import { Products } from '../../models/products';

@Service()
export class ProductService {

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
      category: 'Sucos'
    },
    {
      id: 1,
      name: 'x-burguer',
      description: 'Pão, hamburgue, mussarela',
      price: 18.99,
      category: 'Lanches'
    },
    {
      id: 1,
      name: 'Mussarela',
      description: 'Molho, mussarela e mangericão',
      price: 8.99,
      category: 'Pizzas'
    }
  ]);

  public categories = computed(() => {
    const categoriesList = this.products().map(p => p.category);
      return Array.from(new Set(categoriesList))
  });
}
