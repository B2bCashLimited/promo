import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@b2b/shared/material.module';
import { SharedModule } from '@b2b/shared/shared.module';
import { ComponentsModule } from '@b2b/components/components.module';
import { GtagModule } from 'angular-gtag';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '@b2b/environments/environment';
import { YANDEX_METRIKA_KEY } from '@b2b/services/yandex-metrika-key';
import { GTAG_KEY } from '@b2b/services/gtag-key';

export class CustomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(import(`../assets/i18n/${lang.toLowerCase()}.json`));
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    ComponentsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
        deps: [HttpClient]
      }
    }),
    GtagModule.forRoot({ trackingId: environment.gtagKey, trackPageviews: true })
  ],
  providers: [
    { provide: YANDEX_METRIKA_KEY, useValue: environment.yandexMetrikaKey },
    { provide: GTAG_KEY, useValue: environment.gtagKey },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
