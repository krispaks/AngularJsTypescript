'use strict';

import { IHeroListService, Hero } from './herolist.model';
import { IHeroDetail } from '../herodetail/herodetail.model';

export class HeroListService implements IHeroListService {
    static $inject = ['$resource'];
    
    constructor(private $resource: ng.resource.IResourceService){        
    }
    
    GetHeroes() : ng.IPromise<ng.resource.IResourceArray<ng.resource.IResource<any>>> {
        let req = this.$resource('/api/Hero');
        
        return req.get().$promise;
    }
}