import { PlayerDialogComponent } from '@b2b/components/player-dialog/player-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ConfigService } from '@b2b/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('page2') page2El: ElementRef;
  regUrl: string;
  constructor(
    private _config: ConfigService,
    private _dialog: MatDialog) { }

  ngOnInit() {
    this.regUrl = `${this._config.clientUrl}/signup`;
    setTimeout(() => {
      this.page2El.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }, 0);
  }

  playVideo() {
    this._dialog.open(PlayerDialogComponent, {
      data: {
        id: 'N4QaCs3XVm8'
      }
    });
  }

  goToRegistration() {
    window.open(this.regUrl);
  }
}
