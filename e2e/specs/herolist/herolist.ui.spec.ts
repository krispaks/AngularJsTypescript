'use strict';

describe('hero list test', () => {
   it('Hero List', function() {
    browser.get('http://127.0.0.1:8080/HeroList');

    var herolist = element.all(by.repeater('character in $ctrl.heroList'));
    expect(herolist.count()).toEqual(3);

    // You wrote your first test, cross it off the list
    herolist.get(2).element(by.css('md-fab')).click();
  });
});