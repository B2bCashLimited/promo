import { Component } from '@angular/core';
import { ConfigService } from '@b2b/services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  regUrl: string;
  constructor(
    private _config: ConfigService) {
    this.regUrl = `${this._config.clientUrl}/signup`;
  }
}
