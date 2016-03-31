'use strict';

import { IHeroDetail, IHeroDetailCtrl } from './herodetail.model';

class HeroDetailCtrl implements IHeroDetailCtrl {
    hero: IHeroDetail;
    makeCurrent: Function;
    constructor(){        
    }
    
    private selectHero(){
        let ctrl = this;
        ctrl.makeCurrent({hero: ctrl.hero});
    }
}

export class HeroDetailComponent implements ng.IComponentOptions {
    
    templateUrl: string = '';
    controller: any = {};
    transclude: boolean;
    bindings: any = {};
    constructor(){
        let component = this;
        component.templateUrl = '../templates/herodetail/herodetail.template.html';
        component.controller = HeroDetailCtrl;
        component.transclude = true;
        component.bindings = {
            hero: '<',
            makeCurrent: '&'
        }
    }
}
