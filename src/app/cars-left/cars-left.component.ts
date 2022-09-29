import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-left',
  templateUrl: './cars-left.component.html',
  styleUrls: ['./cars-left.component.css']
})
export class CarsLeftComponent implements OnInit {
  @Input() img: string;
  @Input() cardTitle: string;
  @Input() desc: string;
  @Input() price: string;

  constructor() { 
    this.img = "";
    this.cardTitle = "missing Title";
    this.desc = "missing decription";
    this.price = "missing";
  }

  ngOnInit(): void {
  }

}
