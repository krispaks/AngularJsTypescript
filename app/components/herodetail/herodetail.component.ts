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
    public bindings: any = {};
    constructor(){
        var component = this;
        component.templateUrl = './app/components/herodetail/herodetail.template.html';
        component.controller = HeroDetailCtrl;
        component.bindings = {
            hero: '<'
        }
    }
}
