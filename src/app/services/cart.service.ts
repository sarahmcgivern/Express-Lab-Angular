import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Api {
    apiUrl = 'http://localhost:2000/routes/cart-items';
 
    constructor(private http: HttpClient){}

    getItems = () => this.http.get(this.apiUrl);

    getAllItems = () => this.http.get(this.apiUrl)
}