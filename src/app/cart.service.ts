import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Api {
    apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    private detailSubject;
    detail;
    constructor(private http: HttpClient){
        const initialSubject = window.localStorage.getItem('pokemon-detail');
        const parsedSubject = JSON.parse(initialSubject);
        this.detailSubject = new BehaviorSubject(parsedSubject);
        this.detail = this.detailSubject.asObservable();
    }


    updateDetail = newDetail => {
        this.detailSubject.next(newDetail);
        window.localStorage.setItem('pokemon-detail', JSON.stringify(newDetail));
    };

    // *could use an implicit return below by getting rid of brackets and 'return'; http requests are asynchronous
    getPokemon = () => this.http.get(this.apiUrl);

    getDetail = url => this.http.get(url);

    getFact = () => this.http.get('http://localhost:3000');
}