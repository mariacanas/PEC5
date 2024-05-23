import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleModule } from './article.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, ArticleModule, NavbarComponent]
})
export class AppComponent {

  title = 'ecommerce';

  componenteDefecto = 'list';

  mostrarComponente(arg0: string) {
    this.componenteDefecto = arg0;
  }
  
}
