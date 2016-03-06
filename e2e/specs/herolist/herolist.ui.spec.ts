module app.components.herolist {
    //each component will have a class like this for cleaning up html and create behaviours  
    export class HeroListComponent {
        allMDElementTags =  element.all(by.tagName('md-tabs'));
        herolistRef = element(by.css('a[href*="/HeroList"]'));
        rateButton = element(by.buttonText('Rate'));

        visit() {
            browser.get('http://127.0.0.1:8080');
            return this;
        }
        
        isRendered() {
            return this.herolistRef.isPresent();
        }
        
        getHeroList() {
            this.herolistRef.click(); 
            return this;
        }
         getBaseCorrectUrl() {
            return '/';
        }   
        getCorrectHeroUrl() {
            return this.getBaseCorrectUrl()+'HeroList';
        }
    }

    //the tests themselves
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
            element(by.binding('$ctrl.hero.name')).getText().then(function(name) {
            expect(name).toBe('Name: superman');
            });
            
        it('the first ability of the list should be flying', function () {
            feature.getHeroList();
            element(by.binding('$ctrl.hero.ability')).getText().then(function(ability) {
            expect(ability).toBe('Ability: flying');
            });            
        });
        
        it('the first strength of the list should be 1000', function () {
            feature.getHeroList();
            element(by.binding('$ctrl.hero.strength')).getText().then(function(strength) {
            expect(strength).toBe('Strength: 1000');
            });            
        });        
        
        });
    });
}