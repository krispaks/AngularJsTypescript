module app.components.herolist {
    //each component will have a class like this for cleaning up html and create behaviours  
    export class HeroDetailComponent {
        allMDElementTags =  element.all(by.tagName('md-tabs'));
        heroDetailRef = element(by.css('a[href*="/HeroDetail"]'));

        visit() {
            browser.get('http://127.0.0.1:8080');
            return this;
        }
        
        isRendered() {
            return this.heroDetailRef.isPresent();
        }
        
        getHeroDetail() {
            this.heroDetailRef.click(); 
            return this;
        }
         getBaseCorrectUrl() {
            return '/';
        }   
        getCorrectHeroUrl() {
            return this.getBaseCorrectUrl()+'HeroDetail';
        }
    }

    //the tests themselves
    describe('the hero list component', function () {
        var feature;

        beforeEach(function () {
            feature = new HeroDetailComponent();
            feature.visit();
        });

        it('should render homepage as default', function () {
            expect(browser.getLocationAbsUrl()).toBe(feature.getBaseCorrectUrl());
        });

        it('should render the correct contents for homepage', function () {
            expect(feature.isRendered()).toBe(true);
        });
        
        it('should navigate to the correct url for the hero list', function () {
            feature.getHeroDetail();
            expect(browser.getLocationAbsUrl()).toBe(feature.getCorrectHeroUrl());
        });
          
        it('the first strength of the list should be 1000', function () {
            feature.getHeroDetail();
            element(by.binding('$ctrl.hero.name')).getText().then(function(name) {
            expect(name).toBe('Name: Captain Barbel');
            });            
        }); 
        
        it('the first strength of the list should be 1000', function () {
            feature.getHeroDetail();
            element(by.binding('$ctrl.hero.ability')).getText().then(function(ability) {
            expect(ability).toBe('Ability: Like Superman');
            });            
        });     
                      
        it('the first strength of the list should be 1000', function () {
            feature.getHeroDetail();
            element(by.binding('$ctrl.hero.strength')).getText().then(function(strength) {
            expect(strength).toBe('Strength: 1000');
            });            
        });                    
        
        });
}