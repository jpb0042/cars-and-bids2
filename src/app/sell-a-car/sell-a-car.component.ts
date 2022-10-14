import { Component, OnInit } from '@angular/core';
import { recently_sold_list2 } from '../recently-sold/recently-sold-list2';
import { RecentlySoldModel } from '../recently-sold/recently-sold.model';

@Component({
  selector: 'app-sell-a-car',
  templateUrl: './sell-a-car.component.html',
  styleUrls: ['./sell-a-car.component.css']
})
export class SellACarComponent implements OnInit {

  products: RecentlySoldModel[] = []
  constructor(){
    for (var x of recently_sold_list2){
      console.log(x)
      this.products.push(x)
    }
  }

  ngOnInit(): void {
  }

}
