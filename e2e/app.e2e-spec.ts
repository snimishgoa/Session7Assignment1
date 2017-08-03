import { Session7Assignment1Page } from './app.po';

describe('session7-assignment1 App', () => {
  let page: Session7Assignment1Page;

  beforeEach(() => {
    page = new Session7Assignment1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
