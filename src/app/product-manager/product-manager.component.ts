import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { data } from '../MockData';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products = data;
  constructor() { }

  ngOnInit() {
  }
  selected:Product;
  showDetail(product){
    this.selected = product;
    console.log(this.selected);
  }
  
  removeitem(id){
    //  console.log(id);
    //  this.products.filter(function(product){
    //    return this.product.id !== id;
    //  })
    this.products = this.products.filter(product=> product.id !== id);
    }
}