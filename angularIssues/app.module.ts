import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpHeaders} from '@angular/common/http'

import {PageHandleService} from './pageHandling.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { MensClothesComponent } from './pages/mens-clothes/mens-clothes.component';
import { WomensClothesComponent } from './pages/womens-clothes/womens-clothes.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { CollectionPageComponent } from './pages/collection-page/collection-page.component';
import { ListCollectionComponent } from './pages/list-collection/list-collection.component';
import { SearchComponent } from './search/search.component';
import { ImgSizerItemComponent } from './img-sizer-item/img-sizer-item.component';

import { ProductSliderMainComponent } from './product-slider-main/product-slider-main.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ContainerSlideComponent } from './container-slide/container-slide.component';
import { CatagoryImgsComponent } from './catagory-imgs/catagory-imgs.component';
import { ImgContainerComponent } from './img-container/img-container.component';
import { FrowComponent } from './frow/frow.component';



@NgModule({
  declarations: [
  //  Input,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductPageComponent,
    MensClothesComponent,
    WomensClothesComponent,
    AccessoriesComponent,
    BoardsComponent,
    CollectionPageComponent,
    ListCollectionComponent,
    SearchComponent,
    ImgSizerItemComponent,
    ProductSliderMainComponent,
    ProductcardComponent,
    ContainerSlideComponent,
    CatagoryImgsComponent,
    ImgContainerComponent,
    FrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [PageHandleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
