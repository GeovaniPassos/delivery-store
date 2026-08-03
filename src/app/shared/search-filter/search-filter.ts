import { Component, inject } from '@angular/core';
import { MatFormField, MatLabel, MatInput, MatInputModule } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search-service/search-service';

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

  private searchService = inject(SearchService);

  searchTerm: string = '';

  onSearch(searchTerm: string) {
    this.searchService.setTerm(searchTerm);
  }
}
