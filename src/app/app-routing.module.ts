import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled', // Add options right here
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
