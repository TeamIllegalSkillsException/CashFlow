import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner';

@Component({
  selector: 'preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  providers: [SpinnerService]
})
export class PreloaderComponent implements OnInit {
  public active: boolean;

  constructor(private spinnerService: SpinnerService) {
    this.active = spinnerService.active;
  }
  
  ngOnInit() {
  }

}
