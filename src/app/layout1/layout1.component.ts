import { Component, OnInit } from '@angular/core';
import { CarsLeftModel } from '../cars-left/cars-left.model';
import { Layout1Service } from './layout1.service';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {

  products: CarsLeftModel[] = []

  constructor(private layout1Service:Layout1Service){
  }

  ngOnInit(): void {
    this.layout1Service.getProducts().subscribe((data: CarsLeftModel[]) => {
    console.log("Fetching products");
    for (var product of data){
      console.log(product);
      this.products.push(product);
    }
  });
  }

}
