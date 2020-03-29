 import { Component,Input} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {Observable} from "rxjs";



@Component({
  selector: 'app-productcard',
  templateUrl:  './productcard.component.html' ,
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent   {

  constructor(){


  }

  @Input()  data: any;





}
