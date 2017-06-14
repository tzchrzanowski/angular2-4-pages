import { GeekfunPage } from './app.po';

describe('geekfun App', () => {
  let page: GeekfunPage;

  beforeEach(() => {
    page = new GeekfunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
