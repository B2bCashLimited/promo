import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, Injector } from '@angular/core';
import { environment } from '@b2b/environments/environment';
import { AnalyticsService } from '@b2b/services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _injector: Injector,
    private _translate: TranslateService) {
      if (environment.production && environment.envName === 'live') {
        this._injector.get(AnalyticsService).loadAnalytics();
      }
    }

  ngOnInit() {
    this._translate.setDefaultLang(environment.defaultLanguage);
  }
}
