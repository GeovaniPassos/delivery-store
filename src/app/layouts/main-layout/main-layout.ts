import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { Header } from "../../shared/header/header";
import { Categories } from "../../pages/categories/categories";
import { Products } from '../../models/products';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Categories],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
}
