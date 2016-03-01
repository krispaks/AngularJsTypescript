'use strict';

describe('hero list test', () => {
   it('Hero List', function() {
    browser.get('http://127.0.0.1:8080');
    
    browser.pause();
    
    var tabs = element.all(by.tagName('md-tabs'));
    expect(tabs.count()).toEqual(1);
    
    tabs.get(0).element(by.tagName('a')).click(); 
  });
});