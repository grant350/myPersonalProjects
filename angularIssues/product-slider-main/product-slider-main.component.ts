import { Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { DataService } from '../products.service';
import {Observable} from "rxjs";



@Component({
  selector: 'app-product-slider-main',
  templateUrl: './product-slider-main.component.html',
  styleUrls: ['./product-slider-main.component.scss','../productcard/productcard.component.scss']
})


export class ProductSliderMainComponent implements OnInit {


public data={}
array=[0,1,2,3,4,5]
 constructor(private dataservice: DataService ) {}

 ngOnInit() {

let el2 = document.createElement('script');
let el = document.createElement('script');
    el.setAttribute('src', '../../assets/flickity-resize.js');
    document.body.appendChild(el);
    el2.setAttribute('src', '../../assets/flickity.js');
    document.body.appendChild(el2);


this.dataservice.getJS()

this.dataservice.getJSON().subscribe(data => {
console.log(data)

this.data = data
})

  }


}
