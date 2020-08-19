import { AppPage } from './app.po';
import { browser, element } from 'protractor';

describe('starter App', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.driver.manage().window().maximize();
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleH2()).toEqual('Flight Search');
  });

  it('should display flight-cards', () => {
    page.navigateTo();
    page.search('Graz', 'Hamburg');
    const count = page.getFlightCardCount();
    expect(count).toEqual(5);
  });


});
