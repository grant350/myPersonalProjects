import {
  Component, ViewChild,OnInit, ViewChildren, AfterViewInit, ElementRef, Renderer2, QueryList,NgZone,ApplicationRef
}
  from '@angular/core';
  import { Location } from '@angular/common';

import { Subscription } from 'rxjs';
import {
  ActivatedRoute,ResolveStart, Router,RouterEvent, NavigationEnd, UrlSegment
} from '@angular/router';
import { Observable } from "rxjs";
import * as $ from 'jquery';
import { pairwise, map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import {PageHandleService} from '../pageHandling.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})




export class HeaderComponent implements AfterViewInit,OnInit {

  public currentUrl2: any;

  constructor(private renderer: Renderer2, private router: Router, private activatedRoute: ActivatedRoute, private location: Location, private pageHandleService: PageHandleService,private ngZone: NgZone) {


this.currentUrl2 =  this.activatedRoute.snapshot.data['url'];
console.log(this.currentUrl2)



  }






ngOnInit(){
this.currentUrl2 = this.pageHandleService.getUrl()

    this.ngZone.runOutsideAngular(() => {
        window.setInterval(() => {
console.log(this.currentUrl2)

      }, 2000);

    });

console.log(this.pageHandleService.getUrl() )

}




  @ViewChild("superclass", { static: false } as any) superclass: ElementRef;
  @ViewChildren("megaclass") megaclass: QueryList<ElementRef>;



  ngAfterViewInit() {





    console.log(this.currentUrl2 + " hiiii")

    this.megaclass.toArray().forEach(megaclass => {
      console.log(this.superclass.nativeElement)



      if (this.currentUrl2 == megaclass.nativeElement.getAttribute("routerLink")) {
        console.log("hi")
        //this.superclass.nativeElement.classList.add("underline_is-active")
        this.renderer.addClass(this.superclass.nativeElement, "underline_is-active")
      }
      else {
        this.renderer.removeClass(this.superclass.nativeElement, "underline_is-active")
      }

    });




  }









}
