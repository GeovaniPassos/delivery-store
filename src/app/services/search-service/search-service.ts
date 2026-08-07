import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class SearchService {

    private routes = inject(Router);

    search = signal('');

    setTerm(term: string) {
        this.search.set(term);
        if (term != '') {
            this.routes.navigate(['/produtos']);
        }
    }

    clearSearch() {
        this.search.set('');
    }
}
