import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
  public slideHeight:number = window.innerHeight;
  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides:any[] = [];

  public constructor() {
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

  }

  onResize(event) {
    this.slideHeight = window.innerHeight;
  }

}
