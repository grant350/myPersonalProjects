import {
  Component, AfterContentInit, OnDestroy, ViewChild, OnInit, ViewChildren, AfterViewInit, ElementRef, Renderer2, QueryList, NgZone, ApplicationRef
}
  from '@angular/core';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';
import {
  ActivatedRoute, ResolveStart, Event, Router, RouterEvent, NavigationEnd, UrlSegment
} from '@angular/router';
import { Observable } from "rxjs";
import * as $ from 'jquery';
import { pairwise, map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { PageHandleService } from '../pageHandling.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})




export class HeaderComponent implements AfterContentInit, AfterViewInit, OnInit, OnDestroy {

  public previousUrl: any;
  private subscription: Subscription;


  @ViewChild("superclass", { static: false } as any) superclass: ElementRef;
  @ViewChildren("megaclass") megaclass: QueryList<ElementRef>;


  constructor(private element: ElementRef, private renderer: Renderer2, private router: Router, private activatedRoute: ActivatedRoute, private location: Location, private pageHandleService: PageHandleService) {
    this.subscription = router.events.subscribe((s: Event) => {
      if (s instanceof NavigationEnd) {
        this.update();
      }
    });
  }


  ngOnInit() { }

  ngAfterViewInit() { }

  ngAfterContentInit() { }



  private update(): void {
    if (!this.router.navigated || !this.superclass) return;
    Promise.resolve().then(() => {
      this.previousUrl = this.router.url 

      this.megaclass.toArray().forEach((superclass) => {
        console.log(superclass.nativeElement.children[0].classList)
        console.log(superclass.nativeElement.children)

        if (this.previousUrl == superclass.nativeElement.getAttribute("routerLink")) {
          this.renderer.addClass(superclass.nativeElement.children[0], "underline_is-active")
          console.log("add class")
        } else {
          this.renderer.removeClass(superclass.nativeElement.children[0], "underline_is-active")
          console.log("remove class")
        }
      });
    })
    //update is done
  }
  ngOnDestroy(): void { this.subscription.unsubscribe(); }


  //class is done
}
