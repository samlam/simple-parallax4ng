import { Component, OnInit, AfterContentInit, Directive, ElementRef,
  Renderer, Input, Renderer2, ViewChild, ViewContainerRef
} from '@angular/core';
import { css } from './css';
// const css: string = require('./simple-parallax.component.css')

@Component({
  selector: 'simple-parallax',
  template: `
<div id="{{eleId}}" class="parallax" #container>
    <ng-content ></ng-content>
</div>
  `,
  styles: [css]
})
export class SimpleParallaxComponent implements OnInit {
  @Input() bgUrl: string;
  @Input() bgColor = `#676`;
  @Input() eleId: string;
  @Input() paraBackground = 'fixed'; // scroll or fixed
  @Input() height = 100;
  @Input() padding = '25vh 10%';
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(public renderer: Renderer2) {

  }

  ngOnInit() {
    const ele = this.container.element.nativeElement;
    if (this.bgUrl !== undefined && this.bgUrl.length > 0) {
      this.renderer.setStyle(ele, 'backgroundImage', this.bgUrl);
    }else {
      this.renderer.setStyle(ele, 'backgroundColor', this.bgColor);
    }
    if (this.padding) {
      this.renderer.setStyle(ele, 'padding', this.padding);
      this.renderer.setStyle(ele, 'backgroundAttachment', this.paraBackground);
      this.renderer.setStyle(ele, 'min-height', this.height + 'vh' );
    }
  }

}
