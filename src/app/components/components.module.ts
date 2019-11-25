import { NgModule } from '@angular/core';
import { MaterialModule } from '@b2b/shared/material.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@b2b/shared/shared.module';
import { PlayerDialogComponent } from '@b2b/components/player-dialog/player-dialog.component';
import { WizardComponent } from './wizard/wizard.component';
import { FooterComponent } from '@b2b/components/footer/footer.component';
import { HomeComponent } from '@b2b/components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlayerDialogComponent,
    WizardComponent
  ],
  entryComponents: [
    PlayerDialogComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlayerDialogComponent,
    WizardComponent
  ]
})
export class ComponentsModule {
}
