import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
  public isUserLoggedIn: Observable<boolean> | boolean;

  public slideHeight:number = window.innerHeight;
  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides:any[] = [];

  public constructor(private authService: AuthService) {

    this.addSlide('../../../assets/images/slider/slide-03.jpg', 'homepage-background');
  }

  public addSlide(imageUrl, caption):void {
    this.slides.push({
      image: imageUrl,
      text: caption
    });
  }

  public removeSlide(index:number):void {
    this.slides.splice(index, 1);
  }

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isLoggedIn();
  }

  ngDoCheck() {
    this.isUserLoggedIn = this.authService.isLoggedIn();
  }

  onResize(event) {
    this.slideHeight = window.innerHeight;
  }
}
