import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { RatingBtnComponent } from './components/rating-btn/rating-btn.component';
import { ThanksCardComponent } from './components/thanks-card/thanks-card.component';
import { RatingCardContentComponent } from './components/rating-card-content/rating-card-content.component';

const appRoutes: Routes = [
  { path: '', component: RatingCardContentComponent },
  {
    path: 'submit',
    component: ThanksCardComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CardComponent,
    ButtonComponent,
    RatingBtnComponent,
    ThanksCardComponent,
    RatingCardContentComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
