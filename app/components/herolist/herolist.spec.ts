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
        httpBackend.whenGET('/api/Hero')
        .respond({
            data: [{
                heroId: 1,
                name: 'Superman',
                ability: 'strength',
                strength: 1000 
            },
            {
                heroId: 2,
                name: 'Batman',
                ability: 'intelligence',
                strength: 100
            }]
        });
        
        var promise = heroListService.GetHeroes();
        
        promise.then((data)=>{
            expect(data.data.length).toBe(2);
        })
        .catch((error)=>{

        });

        httpBackend.flush();
    });
});



