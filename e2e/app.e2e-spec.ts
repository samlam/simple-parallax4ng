import { SimpleParallax4ngPage } from './app.po';

describe('simple-parallax4ng App', () => {
  let page: SimpleParallax4ngPage;

  beforeEach(() => {
    page = new SimpleParallax4ngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
