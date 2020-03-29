import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-testimg',
  templateUrl: './img-sizer-item.component.html',
  styleUrls: ['./img-sizer-item.component.scss'],

})
export class ImgSizerItemComponent implements OnInit {



  constructor() { }

   getImgClass(){
    let classes = ['homeImg', 'image-changed', 'switch_image'];

    return classes;
  };

  ngOnInit() {




  }

}
