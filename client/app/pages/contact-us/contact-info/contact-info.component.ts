import { Component, OnInit } from '@angular/core';
import { SiteSettings } from '../models/siteSettings';
import { SiteSettingsService } from '../services/siteSettings.service';

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  public settings: SiteSettings[];

  constructor(private siteSettingsService: SiteSettingsService) { }

  ngOnInit() {
    this.siteSettingsService.getSettings()
    .map(res => res.json())
    .subscribe(response => {
      this.settings = response;
    });
  }
}
