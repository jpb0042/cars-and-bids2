import { Component, OnInit } from '@angular/core';
import { merch_list } from '../merch/merch-list';
import { MerchModel } from '../merch/merch.model';
@Component({
  selector: 'app-merch',
  templateUrl: './merch-page.component.html',
  styleUrls: ['./merch-page.component.css']
})
export class MerchPageComponent implements OnInit {

  products: MerchModel[] = []
  constructor(){
    for (var x of merch_list){
      console.log(x)
      this.products.push(x)
    }
  }

  ngOnInit(): void {
  }

}
