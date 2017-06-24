import { ScrumToolPage } from './app.po';

describe('scrum-tool App', () => {
  let page: ScrumToolPage;

  beforeEach(() => {
    page = new ScrumToolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
