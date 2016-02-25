'use strict';

import {IHeroListCtrl, IHeroListService} from './herolist.model';
import {IHeroDetail} from '../herodetail/herodetail.model';

class HeroListCtrl implements IHeroListCtrl {
           
    heroList: Array<IHeroDetail> = [];
    static $inject = ['heroListService'];
    
    constructor(private heroListService: IHeroListService ){
        let ctrl = this;  
        
        ctrl.heroList = heroListService.GetHeroes();
    }
}

export class HeroListComponent implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    transclude: boolean;
    constructor(){
        let component = this;
        component.templateUrl = '../templates/herolist/herolist.template.html';
        component.controller = HeroListCtrl;
        component.transclude = true
    }
}