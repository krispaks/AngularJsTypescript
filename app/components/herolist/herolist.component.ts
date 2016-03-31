'use strict';

import {IHeroListCtrl, IHeroListService} from './herolist.model';
import {IHeroDetail} from '../herodetail/herodetail.model';

class HeroListCtrl implements IHeroListCtrl {
           
    heroList: Array<IHeroDetail> = [];
    currentHero: IHeroDetail;
    repos: any = {};
    static $inject = ['heroListService'];
    
    constructor(private heroListService: IHeroListService ){
        let ctrl = this;  
        
        ctrl.heroList.push({name: 'superman', ability: 'strength', strength: 1000});
        ctrl.heroList.push({name: 'batman', ability: 'intelligence', strength: 10})
        ctrl.heroList.push({name: 'flash', ability: 'speed', strength: 100})
    }
    
    selectCurrent = function(currentHero: any){
        let ctrl = this;
        ctrl.currentHero = currentHero;
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