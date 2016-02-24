'use strict';

import { IHeroListService, Hero } from './herolist.model';
import { IHeroDetail } from '../herodetail/herodetail.model';

export class HeroListService implements IHeroListService {
    static $inject = ['$http'];
    
    constructor($http: ng.IHttpService){        
    }
    
    GetHeroes() : Array<IHeroDetail> {
        let heroes: Array<IHeroDetail> = [new Hero('superman', 'flying', 1000)
                        , new Hero('batman', 'nothing', 10)
                        , new Hero('magneto', 'bully', 500)];   ;
        return heroes;
    }
}