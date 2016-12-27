import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner';

@Component({
  selector: 'preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})

export class PreloaderComponent implements OnInit {
  loading:boolean;

  constructor(private spinnerService: SpinnerService) {
     spinnerService.isLoading$.subscribe((newBool: boolean) => { this.loading = newBool; });
  }

  ngOnInit() {
  }

}
