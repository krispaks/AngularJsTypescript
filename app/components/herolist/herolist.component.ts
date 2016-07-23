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
        
        ctrl.heroList.push({heroId: 1, name: 'superman', ability: 'strength', strength: 1000});
        ctrl.heroList.push({heroId: 2, name: 'batman', ability: 'intelligence', strength: 10});
        ctrl.heroList.push({heroId: 3, name: 'flash', ability: 'speed', strength: 100});

        heroListService.GetHeroes()
            .then((data)=>{

            })
            .catch((error)=>{
                
            });
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