import { BanquePage } from './app.po';

describe('banque App', function() {
  let page: BanquePage;

  beforeEach(() => {
    page = new BanquePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
