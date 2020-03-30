import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Router } from '@angular/router';

@Injectable({providedIn: "root"})

export class DataService {




  constructor(private http: HttpClient) {}

getJSON(){
    return  this.http.get('../assets/productCatagories/products.json');



}

getJS(){
    return  this.http.get('../assets/flickity-resize.js');



}




}
