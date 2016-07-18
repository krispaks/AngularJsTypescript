'use strict';

import 'angular';
import 'angular-mocks';
import { AppModule } from '../../app.module';
import { IHeroListService } from './herolist.model';

describe('HeroList', () => {
            
    var $componentController, heroListService, httpBackend, componen;
    new AppModule();

    beforeEach(angular.mock.module('AppModule'));

    beforeEach(inject(($httpBackend, _$componentController_, _heroListService_)=>{
        httpBackend = $httpBackend;
        $componentController = _$componentController_;
        heroListService = _heroListService_;
    }));

    it('herolist service', ()=>{
        /*httpBackend.whenGET('https://api.github.com/users/krispaks/repos')
        .respond([{
            data: {
                    name: 'khris',
                    age: 32
                }
        }]);*/
        
        var promise = heroListService.GetHeroes();
        promise.then((data)=>{
            expect(data).toBe(null);
            expect(data).toBe(null);                
        })
        .catch((error)=>{

        });
    });
});



