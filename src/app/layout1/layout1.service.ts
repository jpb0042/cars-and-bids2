import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarsLeftModel } from "../cars-left/cars-left.model";

@Injectable(
    {providedIn: 'root'}
)
export class Layout1Service{
    private baseUrl:string = "https://carsandbids-app-default-rtdb.firebaseio.com/";
    private productsEndPoint:string = "products.json";

    constructor(private http:HttpClient){

    }
    getProducts(){
        return this.http.get<CarsLeftModel []>(this.baseUrl + this.productsEndPoint);
    }
    getProduct(index:number){
        return this.http.get<CarsLeftModel>(this.baseUrl + 'products' + '/' + index + '.json');

    }

}