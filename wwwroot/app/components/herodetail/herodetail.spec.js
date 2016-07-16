define(["require", "exports", '../../app.module', 'angular', 'angular-mocks'], function (require, exports, app_module_1) {
    'use strict';
    describe('HeroDetail', function () {
        var httpBackend, $componentController;
        new app_module_1.AppModule();
        beforeEach(angular.mock.module('AppModule'));
        beforeEach(inject(function ($httpBackend, _$componentController_) {
            httpBackend = $httpBackend;
            $componentController = _$componentController_;
        }));
        it('test', function () {
            expect(true).toBe(true);
        });
    });
});
