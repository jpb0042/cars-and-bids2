export class MerchModel{
    img: string;
    cardTitle: string;
    price: string;

    constructor(img:string,cardTitle:string,desc:string,price:string){
        this.img = img;
        this.cardTitle = cardTitle;
        this.price = price;

    }
}