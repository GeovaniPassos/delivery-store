import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "../../shared/header/header";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, Header],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
