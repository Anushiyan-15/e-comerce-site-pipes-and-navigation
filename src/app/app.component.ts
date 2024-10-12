import { Component } from '@angular/core';

import { HeaderComponent } from "./components/header/header.component";
import { ProductComponent } from "./components/product/product.component";
import { AngularPipesLabComponent } from './components/angular-pipes-lab/angular-pipes-lab.component';
import { AboutComponent } from './components_for_route/about/about.component';
import { HomeComponent } from './components_for_route/home/home.component';
import { ContactComponent } from './components_for_route/contact/contact.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AnugularCustomPipeComponent } from "./components/anugular-custom-pipe/anugular-custom-pipe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductComponent, AngularPipesLabComponent, AboutComponent, HomeComponent, ContactComponent, RouterModule, AnugularCustomPipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'activity2';

  homeid:number=20;
  conid:number=20;

  aboutid:number=20;

}
