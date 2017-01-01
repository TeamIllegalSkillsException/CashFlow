import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'dashboard-menu',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
