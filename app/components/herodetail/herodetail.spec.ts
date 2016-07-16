'use strict';

import 'angular';
import 'angular-mocks';
import { AppModule } from '../../app.module';

describe('HeroDetail', () => {
    var httpBackend, $componentController;
    new AppModule();
    beforeEach(angular.mock.module('AppModule'));

    beforeEach(inject(($httpBackend, _$componentController_)=>{
        httpBackend = $httpBackend;
        $componentController = _$componentController_;
    }));

    it('test', ()=>{
        expect(true).toBe(true);
    });
})

