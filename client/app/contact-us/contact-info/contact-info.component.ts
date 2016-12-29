import { Component, OnInit } from '@angular/core';
import { SiteSettings } from '../models/siteSettings';
import { SiteSettingsService } from '../services/siteSettings.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  // public icon: string;
  public settings: SiteSettings[]

  constructor(private siteSettingsService: SiteSettingsService) { }

  ngOnInit() {    
    this.siteSettingsService.getSettings()
    .map(res => res.json())
    .subscribe(response => {
      this.settings = response;

      this.settings.forEach(setting => {
        if(setting.key === 'Address') {
          setting.icon = 'fa fa-home';
        } else if(setting.key === 'Phone') {
          setting.icon = 'fa fa-phone';
        } else if(setting.key === 'E-mail') {
          setting.icon = 'fa fa-envelope';
        }
      });
    });

    
  }
}
