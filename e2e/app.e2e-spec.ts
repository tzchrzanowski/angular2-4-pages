import { AppStartPage } from './app.po';

describe('app-start App', () => {
  let page: AppStartPage;

  beforeEach(() => {
    page = new AppStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
