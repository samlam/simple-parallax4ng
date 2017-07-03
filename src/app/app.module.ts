import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleParallaxComponent } from './simple-parallax/simple-parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleParallaxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
