import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { NxWelcomeComponent } from './nx-welcome.component';
import{ProductsComponent} from '@angular-monorepo/products'
// import{UiComponent} from '@angular-monorepo/ui'
@Component({
  imports: [ProductsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inventory';
}
