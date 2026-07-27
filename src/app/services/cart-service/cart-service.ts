import { computed, Service, signal } from '@angular/core';
import { Products } from '../../models/products';
import { Cart } from '../../models/cart';

@Service()
export class CartService {

    private readonly cartItems = signal<Cart[]>([]);

    readonly totalItems = computed(() => 
      this.cartItems().reduce((total, item) => total + item.quantity, 0)
    );

    addToCart(product: Products) {
        this.cartItems.update((items) => {
          const existingItem = items.find((item) => item.product.id === product.id)  
        
          if (existingItem) {
            return items.map((item) => 
                item.product.id === product.id ? { ...item, quantity: item.quantity + 1} 
                : item
            );
          }

          return [ ...items, { product, quantity: 1}];

        });
    }
}