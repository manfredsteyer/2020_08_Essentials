import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleH2() {
    return element(by.css('h2')).getText();
  }

  search(from: string, to: string) {
    const fromElm = element(by.css('input[name=from]'));
    const toElm = element(by.css('input[name=to]'));
    const btn = element(by.css('button[name=btnSearch]'));

    fromElm.clear();
    toElm.clear();
    fromElm.sendKeys('Graz');
    toElm.sendKeys('Hamburg');
    btn.click();
  }

  getFlightCardCount() {
    const x = element.all(by.css('flight-card'));
    const count = x.count();
   	return count;
  }

}
