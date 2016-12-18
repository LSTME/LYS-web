import { LysPage } from './app.po';

describe('lys App', function() {
  let page: LysPage;

  beforeEach(() => {
    page = new LysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
