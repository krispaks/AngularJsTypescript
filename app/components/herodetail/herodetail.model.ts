export interface IHeroDetailCtrl {
    hero: IHeroDetail;
}

export interface IHeroDetail {
    heroId: number;
    name: string;
    ability: string;
    strength: number;    
}