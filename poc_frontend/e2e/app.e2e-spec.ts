import { PocFrontendPage } from './app.po';

describe('poc-frontend App', function() {
  let page: PocFrontendPage;

  beforeEach(() => {
    page = new PocFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
