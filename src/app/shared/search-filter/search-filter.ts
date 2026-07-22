import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatInput, MatInputModule } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-filter',
  imports: [
    MatInputModule, 
    FormsModule, 
    CommonModule],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.scss',
})
export class SearchFilter {
  searchTerm: string = '';

  onSearch() {
    console.log('Search term:', this.searchTerm);
  }
}
