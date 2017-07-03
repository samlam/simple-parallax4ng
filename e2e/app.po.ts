import { browser, by, element } from 'protractor';

export class SimpleParallax4ngPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('simple-app div h1')).getText();
  }
}
