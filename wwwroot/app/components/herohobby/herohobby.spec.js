define(["require", "exports", '../../app.module', 'angular', 'angular-mocks'], function (require, exports, app_module_1) {
    'use strict';
    describe('HeroDetail', function () {
        var httpBackend, $componentController;
        new app_module_1.AppModule();
        beforeEach(angular.mock.module('AppModule'));
        beforeEach(inject(function ($httpBackend, _$componentController_, _heroListService_) {
            httpBackend = $httpBackend;
            $componentController = _$componentController_;
        }));
        it('should expose a hero object', function () {
            var bindings = {
                hero: {
                    heroId: 1
                }
            };
            var ctrl = $componentController('heroHobby', null, bindings);
            expect(ctrl.hero.heroId).toBe(1);
        });
    });
});
