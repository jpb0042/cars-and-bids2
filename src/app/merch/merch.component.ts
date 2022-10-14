import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {
  @Input() img: string;
  @Input() cardTitle: string;
  @Input() price: string;

  constructor() { 
    this.img = "";
    this.cardTitle = "missing Title";
    this.price = "missing";
  }

  ngOnInit(): void {
  }

}