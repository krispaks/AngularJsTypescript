'use strict';

import 'angular';
import 'angular-mocks';
import { AppModule } from '../../app.module';

describe('HeroDetail', () => {
    var httpBackend, $componentController;
    new AppModule();
    beforeEach(angular.mock.module('AppModule'));

    beforeEach(inject(($httpBackend, _$componentController_, _heroListService_)=>{
        httpBackend = $httpBackend;
        $componentController = _$componentController_;
    }));

    it('should expose a hero object', () => {
        var bindings = {
            hero: {
                heroId: 1
            }
        };

        var ctrl = $componentController('heroHobby', null, bindings);

        expect(ctrl.hero.heroId).toBe(1);            
    });
})
