import { PlayerDialogComponent } from '@b2b/components/player-dialog/player-dialog.component';
import {
  Component,
  ElementRef,
  OnInit, ViewChild,
  AfterViewInit, Input,
} from '@angular/core';
import { MatHorizontalStepper, MatDialog } from '@angular/material';
import { ConfigService } from '@b2b/services/config.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, AfterViewInit {
  video = {
    c2: 'NMmhh1uKgQE',
    c3_1: '8dN3LUsWqSc',
    c3_2: 'l_bmhNO8vAE',
    c4: '_3BZ--N_y-4',
    s3: '8xcwjcsgaEU',
    s4_1: '9u8lGaxQm9c',
    s4_2: '2PK0kDY7gYE',
    s5: 'plIX43ibQUE',
  };

  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;
  @Input() type: 'person' | 'supplier' = 'person';
  @ViewChild('carouselS3') carouselS3: ElementRef;

  @ViewChild('stepC3') stepC3: ElementRef;
  @ViewChild('stepC4') stepC4: ElementRef;
  @ViewChild('stepS3') stepS3: ElementRef;
  @ViewChild('stepS4') stepS4: ElementRef;
  @ViewChild('stepS5') stepS5: ElementRef;

  regUrl: string;
  clientUrl: string;
  stepIdx: number;
  constructor(
    private _dialog: MatDialog,
    private _config: ConfigService) { }

  ngOnInit() {
    this.regUrl = `${this._config.clientUrl}/signup`;
    this.clientUrl = `${this._config.clientUrl}`;
  }

  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
  }

  selectionChange(evt) {
    this.stepIdx = evt.selectedIndex;
    let idx = 0;
    clearTimeout();

    const carusel = (slides) => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }
      idx++;
      if (idx > slides.length) { idx = 1; }
      slides[idx - 1].classList.add('active');
      setTimeout(() => {
        if (this.stepIdx >= 2 && this.stepIdx <= 4) {
          carusel(slides);
        }
      }, 4000);
    };
    switch (this.stepIdx) {
      case 2:
        if (this.type === 'person') {
          carusel(this.stepC3.nativeElement.querySelectorAll('.slide-item'));
        } else if (this.type === 'supplier') {
          carusel(this.stepS3.nativeElement.querySelectorAll('.slide-item'));
        }
        break;
      case 3:
        if (this.type === 'person') {
          carusel(this.stepC4.nativeElement.querySelectorAll('.slide-item'));
        } else if (this.type === 'supplier') {
          carusel(this.stepS4.nativeElement.querySelectorAll('.slide-item'));
        }
        break;
      case 4:
        carusel(this.stepS5.nativeElement.querySelectorAll('.slide-item'));
        break;
    }
  }

  playVideo(videoId: string) {
    this._dialog.open(PlayerDialogComponent, {
      data: {
        id: videoId
      }
    });
  }
}
