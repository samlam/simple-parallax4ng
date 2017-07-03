import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleParallaxComponent } from './simple-parallax.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleParallaxComponent],
  providers: [],
  exports: [
    SimpleParallaxComponent
  ]
})
export class SimpleParallaxModule { }
