var app;
(function (app) {
    var components;
    (function (components) {
        var herolist;
        (function (herolist) {
            var HeroListComponent = (function () {
                function HeroListComponent() {
                    this.allMDElementTags = element.all(by.tagName('md-tabs'));
                    this.herolistRef = element(by.css('a[href*="/HeroList"]'));
                    this.rateButton = element(by.buttonText('Rate'));
                }
                HeroListComponent.prototype.visit = function () {
                    browser.get('http://127.0.0.1:8080');
                    return this;
                };
                HeroListComponent.prototype.isRendered = function () {
                    return this.herolistRef.isPresent();
                };
                HeroListComponent.prototype.getHeroList = function () {
                    this.herolistRef.click();
                    return this;
                };
                HeroListComponent.prototype.getBaseCorrectUrl = function () {
                    return '/';
                };
                HeroListComponent.prototype.getCorrectHeroUrl = function () {
                    return this.getBaseCorrectUrl() + 'HeroList';
                };
                return HeroListComponent;
            }());
            herolist.HeroListComponent = HeroListComponent;
            describe('the hero list component', function () {
                var feature;
                beforeEach(function () {
                    feature = new HeroListComponent();
                    feature.visit();
                });
                it('should render homepage as default', function () {
                    expect(browser.getLocationAbsUrl()).toBe(feature.getBaseCorrectUrl());
                });
                it('should render the correct contents for homepage', function () {
                    expect(feature.isRendered()).toBe(true);
                });
                it('should navigate to the correct url for the hero list', function () {
                    feature.getHeroList();
                    expect(browser.getLocationAbsUrl()).toBe(feature.getCorrectHeroUrl());
                });
                it('the first name of the list should be Superman', function () {
                    feature.getHeroList();
                    element(by.binding('$ctrl.hero.name')).getText().then(function (name) {
                        expect(name).toBe('Name: superman');
                    });
                    it('the first ability of the list should be flying', function () {
                        feature.getHeroList();
                        element(by.binding('$ctrl.hero.ability')).getText().then(function (ability) {
                            expect(ability).toBe('Ability: flying');
                        });
                    });
                    it('the first strength of the list should be 1000', function () {
                        feature.getHeroList();
                        element(by.binding('$ctrl.hero.strength')).getText().then(function (strength) {
                            expect(strength).toBe('Strength: 1000');
                        });
                    });
                });
            });
        })(herolist = components.herolist || (components.herolist = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
