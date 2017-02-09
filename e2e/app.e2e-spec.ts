import { FooIsAlreadyDefinedPage } from './app.po';

describe('foo-is-already-defined App', function() {
  let page: FooIsAlreadyDefinedPage;

  beforeEach(() => {
    page = new FooIsAlreadyDefinedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
