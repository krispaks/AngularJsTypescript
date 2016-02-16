'use strict';

import {IHeroListCtrl, IHeroListService} from './herolist.model';
import {IHeroDetail} from '../herodetail/herodetail.model';

class HeroListCtrl implements IHeroListCtrl {
    
    // this should call a service    
    public heroList: Array<IHeroDetail> = [];
    private heroListService: IHeroListService;
    
    constructor($http: ng.IHttpService, heroListService: IHeroListService ){
        let ctrl = this;
        
        ctrl.heroList = heroListService.GetHeroes();                
    }
}

export class HeroListComponent implements ng.IComponentOptions {
    public templateUrl: string;
    public controller: any;
    constructor(){
        let component = this;
        component.templateUrl = './app/components/herolist/herolist.template.html';
        component.controller = HeroListCtrl;
    }
}