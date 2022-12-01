import { Component, OnInit } from '@angular/core';
import { CarsLeftModel } from '../cars-left/cars-left.model';
import { Layout1Service } from '../layout1/layout1.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private ps: Layout1Service) { }

  ngOnInit(): void {
  }

  addCar(product:CarsLeftModel){
    console.log("You clicked submit");
    this.ps.addProduct(product);
  }

}
