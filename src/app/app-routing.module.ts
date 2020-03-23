import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import aboutComponentCss from './about/about.component.css';
import { ProductListComponent } from './product-list/product-list.component';
import homeComponentCss from './home/home.component.css';
import serviceComponentCss from './service/service.component.css';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'add', component: ProductAddComponent},
  { path: 'manager', component: ProductManagerComponent},
  { path: 'about', component: aboutComponentCss},
  { path: 'list', component: ProductListComponent},
  { path: 'home', component: homeComponentCss},
  { path: 'service', component: serviceComponentCss}
  // { path: '**', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }