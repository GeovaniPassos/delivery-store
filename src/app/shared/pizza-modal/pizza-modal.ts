import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-modal',
  imports: [],
  templateUrl: './pizza-modal.html',
  styleUrl: './pizza-modal.scss',
})
export class PizzaModal {

  renderModal() {
    console.log("Rendering pizza modal");
  }
}
