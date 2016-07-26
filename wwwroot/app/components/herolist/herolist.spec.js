define(["require", "exports", '../../app.module', 'angular', 'angular-mocks'], function (require, exports, app_module_1) {
    'use strict';
    describe('HeroList', function () {
        var $componentController, heroListService, httpBackend, componen;
        new app_module_1.AppModule();
        beforeEach(angular.mock.module('AppModule'));
        beforeEach(inject(function ($httpBackend, _$componentController_, _heroListService_) {
            httpBackend = $httpBackend;
            $componentController = _$componentController_;
            heroListService = _heroListService_;
        }));
        it('herolist service', function () {
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
            promise.then(function (data) {
                expect(data.data.length).toBe(2);
            })
                .catch(function (error) {
            });
            httpBackend.flush();
        });
    });
});
