import { Component, input, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";
import { MatFormField, MatLabel } from "@angular/material/input";

@Component({
  selector: 'app-header',
  imports: [RouterLink, 
    MatToolbarModule, 
    MatButtonModule, 
    MatFormField, 
    MatLabel, 
    MatIconModule],
    
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly value = signal('');

}
  