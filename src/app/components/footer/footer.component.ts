import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@b2b/services/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  clientDocsUrl: string;

  constructor(
    private _config: ConfigService) { }

  ngOnInit(): void {
    this.clientDocsUrl = `${this._config.clientUrl}/documents/${(this._config.locale).toLowerCase()}`;
  }
}
