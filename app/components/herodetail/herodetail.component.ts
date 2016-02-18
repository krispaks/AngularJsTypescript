'use strict';

import { IHeroDetail, IHeroDetailCtrl } from './herodetail.model';

class HeroDetailCtrl implements IHeroDetailCtrl {
    public hero: IHeroDetail;
    constructor(){        
    }
}

export class HeroDetailComponent implements ng.IComponentOptions {
    
    public templateUrl: string = '';
    public controller: any = {};
    public transclude: boolean;
    public bindings: any = {};
    constructor(){
        let component = this;
        component.templateUrl = './app/components/herodetail/herodetail.template.html';
        component.controller = HeroDetailCtrl;
        component.transclude = true;
        component.bindings = {
            hero: '<'
        }
    }
}
