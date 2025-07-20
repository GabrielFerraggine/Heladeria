import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IceCreamMainPageComponent } from './ice-cream-main-page/ice-cream-main-page.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'iceCream',
    pathMatch: 'full' 
  },
  {
    path: 'iceCream',
    component: IceCreamMainPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
