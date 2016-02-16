import { IHeroDetail } from '../herodetail/herodetail.model';

export class Hero implements IHeroDetail {
    constructor(public name: string, public ability: string, public strength: number){}
}

export interface IHeroListCtrl {
    heroList: Array<IHeroDetail>;
}

export interface IHeroListService {
    GetHeroes() : Array<IHeroDetail>;
}