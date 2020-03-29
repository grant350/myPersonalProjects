import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import * as $ from 'jquery';

import {HomeComponent} from './pages/home/home.component'
import {ProductPageComponent} from './pages/product-page/product-page.component'
import {AboutComponent} from './pages/about/about.component'
import {ContactComponent} from './pages/contact/contact.component'
import {CollectionPageComponent} from './pages/collection-page/collection-page.component'
import {ListCollectionComponent} from './pages/list-collection/list-collection.component'
import {PageHandleService} from './pageHandling.service' 


const routes: Routes = [
     { path: '', component: HomeComponent,resolve:{url:PageHandleService} },
     { path: 'pages/about', component: AboutComponent },
    { path: 'pages/contact', component: ContactComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
