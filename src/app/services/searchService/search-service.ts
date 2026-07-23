import { Injectable, Service, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    search = signal('');
}
