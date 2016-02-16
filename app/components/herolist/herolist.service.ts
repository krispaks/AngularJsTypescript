import { IHeroListService, Hero } from './herolist.model';
import { IHeroDetail } from '../herodetail/herodetail.model';

export class HeroListService implements IHeroListService {
    http: ng.IHttpService;
    
    constructor($http: ng.IHttpService){
        this.http = $http;
    }
    
    GetHeroes() {
        let heroes: Array<IHeroDetail> = [new Hero('superman', 'flying', 1000)
                        , new Hero('batman', 'nothing', 10)
                        , new Hero('magneto', 'bully', 500)];   ;
        return heroes;
    }
}