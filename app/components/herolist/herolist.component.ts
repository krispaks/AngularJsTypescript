'use strict';

import {IHeroListCtrl, IHeroListService} from './herolist.model';
import {IHeroDetail} from '../herodetail/herodetail.model';

class HeroListCtrl implements IHeroListCtrl {
    
    // this should call a service    
    public heroList: Array<IHeroDetail> = [];
    static $inject = ['heroListService'];
    
    constructor(private heroListService: IHeroListService ){
        let ctrl = this;  
        
        ctrl.heroList = heroListService.GetHeroes();
    }
}

export class HeroListComponent implements ng.IComponentOptions {
    public templateUrl: string;
    public controller: any;
    public transclude: boolean;
    constructor(){
        let component = this;
        component.templateUrl = '../templates/herolist/herolist.template.html';
        component.controller = HeroListCtrl;
        component.transclude = true
    }
}