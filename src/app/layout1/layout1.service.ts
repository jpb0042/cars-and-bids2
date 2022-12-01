import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarsLeftModel } from "../cars-left/cars-left.model";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable(
    {providedIn: 'root'}
)
export class Layout1Service{
    //private baseUrl:string = "https://carsandbids-app-default-rtdb.firebaseio.com/";
   // private productsEndPoint:string = "products";

    constructor(private db:AngularFireDatabase){  //http:HttpClient){

    }
    getProducts(){
        return this.db.list<CarsLeftModel>("products").valueChanges();
    }
    getProduct(index:number){
        return this.db.list<CarsLeftModel>("products").valueChanges();

    }
    addProduct(product:CarsLeftModel){
        this.db.list<CarsLeftModel>("products").push(product);
    }

}