import { Component, OnInit } from '@angular/core';
import { cars_left_list } from '../cars-left/cars-left-list';
import { CarsLeftModel } from '../cars-left/cars-left.model';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.css']
})
export class Layout1Component implements OnInit {

  products: CarsLeftModel[] = []
  constructor(){
    for (var x of cars_left_list){
      console.log(x)
      this.products.push(x)
    }
  }

  ngOnInit(): void {
  }

}
