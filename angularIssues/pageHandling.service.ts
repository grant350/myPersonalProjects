import { Injectable } from '@angular/core';
import {  Router, Resolve,NavigationStart, ActivatedRoute,ResolveStart,RouterEvent, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";
import {map,pairwise} from 'rxjs/operators';
import {filter} from 'rxjs/operators';
  import { Location } from '@angular/common';

@Injectable( {providedIn: 'root'})

export class PageHandleService   implements Resolve<any> {

  previousUrl: any;

 public currentUrl: any;



  constructor(private router: Router){}

resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  var url = "ssfeeesf"
return url

}

 getUrl() {
    return this.previousUrl;
  }


}
