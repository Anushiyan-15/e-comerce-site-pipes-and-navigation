import { Routes } from '@angular/router';
import { AboutComponent } from './components_for_route/about/about.component';
import { ContactComponent } from './components_for_route/contact/contact.component';
import { HomeComponent } from './components_for_route/home/home.component';

export const routes: Routes = [
    {path:'about/:id',component:AboutComponent},
    {path:'contact/:id',component:ContactComponent},
    {path:'home/:id',component:HomeComponent}
];
