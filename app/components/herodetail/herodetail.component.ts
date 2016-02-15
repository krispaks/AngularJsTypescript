'use strict';

import { IHeroDetail } from './herodetail.model';
import 'angular';

class HeroDetailCtrl implements IHeroDetail {
    public hero: string = '';
    public ability: string = '';
    public strength: number = 0;
    constructor(){
        var ctrl = this;
        ctrl.hero = 'anonymous1';
        ctrl.ability = 'invisible';
        ctrl.strength = 200;
    }
}

export class HeroDetailComponent implements ng.IComponentOptions {
    
    public templateUrl: string = '';
    public controller: any = {};
    public bindings: any = {};
    constructor(){
        var component = this;
        component.templateUrl = './app/components/herodetail/herodetail.template.html';
        component.controller = HeroDetailCtrl;
        component.bindings = {
            hero: '@'
        }
    }
}
