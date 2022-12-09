import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";
@Injectable({
    providedIn: 'root'
})
export class AuthService{
    baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signUpendpoint:string = "signUp";
    loginEndpoint:string="signInWithPassword";
    public constructor(private http:HttpClient){

    }
    public signup(email:string, password: string){
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken": true
        };
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpendpoint + '?' + 
                             'key='+ environment.firebase.apiKey,requestBody);

    }
    public login(email:string, password:string){
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken": true
        };
        return this.http.post<AuthResponse>(this.baseUrl + ':' + this.loginEndpoint + '?' + 
        'key='+ environment.firebase.apiKey,requestBody);

    }
}