'use strict';

import 'angular';
import {IHeroList} from './herolist.model';
import {IHeroDetail} from '../herodetail/herodetail.model';

class Hero implements IHeroDetail {
    constructor(public hero: string, public ability: string, public strength: number){}
}
 
class HeroListCtrl implements IHeroList {
    
    // this should call a service    
    public heroList: Array<IHeroDetail> = [];
    
    constructor(){
        let ctrl = this;
        
        ctrl.heroList = [new Hero('superman', 'flying', 1000)
                        , new Hero('batman', 'nothing', 10)
                        , new Hero('magneto', 'bully', 500)];                
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