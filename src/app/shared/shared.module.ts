import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { YandexReachGoalDirective } from '@b2b/directives/yandex-reach-goal.directive';

@NgModule({
  imports: [
    CommonModule,
    YoutubePlayerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    YandexReachGoalDirective
  ],
  exports: [
    CommonModule,
    YoutubePlayerModule,
    FormsModule,
    ReactiveFormsModule,
    YandexReachGoalDirective
  ]
})
export class SharedModule {
}
