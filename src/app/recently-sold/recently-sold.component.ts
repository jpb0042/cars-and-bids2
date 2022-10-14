import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-recently-sold',
  templateUrl: './recently-sold.component.html',
  styleUrls: ['./recently-sold.component.css']
})
export class RecentlySoldComponent implements OnInit {
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


