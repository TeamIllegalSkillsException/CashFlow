import {Component, OnInit, animate, transition, style, state, trigger} from '@angular/core';
import { AuthService } from '../../../shared/services/auth';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fadeInLeft', [
      state('inactive', style({
        opacity:0,
        transform: 'translate3d(-50%, 0, 0)'
      })),
      state('active', style({
        opacity:1,
        transform: 'none'
      })),
      transition('inactive => active', [
        animate('1s 500ms ease-in-out')
      ])
    ]),
    trigger('fadeInRight', [
      state('inactive', style({
        opacity:0,
        transform: 'translate3d(50%, 0, 0)'
      })),
      state('active', style({
        opacity:1,
        transform: 'none'
      })),
      transition('inactive => active', [
        animate('1s 1300ms ease-in-out')
      ])
    ]),
    trigger('fadeInUp', [
      state('inactive', style({
        opacity:0,
        transform: 'translate3d(0, 100%, 0)'
      })),
      state('active', style({
        opacity:1,
        transform: 'none'
      })),
      transition('inactive => active', [
        animate('1.3s 2000ms ease-in-out')
      ])
    ]),
  ]
})

export class SliderComponent implements OnInit {
  public isUserLoggedIn: Observable<boolean> | boolean;
  public slideHeight:number = window.innerHeight;
  public myInterval:number = 5000;
  public noWrapSlides:boolean = false;
  public slides:any[] = [];
  public state: String;

  public constructor(private authService: AuthService) {
    this.state = 'inactive';
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

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  public ngAfterViewInit(): void {
    this.sleep(1000).then(() => {
      this.state = 'active';
    });
  }
}
