'use strict';

describe('hero detail test', () => {
   it('Hero Detail', function() {
    browser.get('http://127.0.0.1:8080');
    
    let tabs = element.all(by.tagName('md-tab'));
    expect(tabs.count()).toEqual(3);
    browser.pause();
    tabs.get(1).element(by.tagName('a')).click(); 
    
    let items = element.all(by.className('md-fab'));
    
    items.get(0).click();
        
    browser.sleep(20000);
  });
});