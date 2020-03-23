import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';

import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'add', component: ProductAddComponent},
  { path: 'manager', component: ProductManagerComponent},
  { path: 'about', component: AboutComponent},
  { path: 'list', component: ProductListComponent},
  { path: 'home', component: HomeComponent},
  { path: 'service', component: ServiceComponent}
  // { path: '**', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }