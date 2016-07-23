// another way of doing it. but this way seems like it will have a global app variable. - just testing

/*module app.herohobby {
    class HeroHobbyCtrl {
        constructor(){            
        } 
    }
    
    class HeroHobby implements ng.IComponentOptions {
        templateUrl: string = '';
        controller: any = {};
        transclude: boolean;
        bindins: any = {};
        
        constructor(){
            let component = this;
            component.templateUrl = '';
            component.controller = HeroHobbyCtrl;
            component.transclude = true;
        }
    }
    
    // this doesnt work.
    //angular.module('AppModule').component('heroHobby', new HeroHobby());
}*/

import { IHobby, Hobby } from './herohobby.model';
import { IHeroDetail } from '../herodetail/herodetail.model';

class HeroHobbyCtrl{
    hero: IHeroDetail;
    hobbyList: Array<IHobby> = [];
    constructor(){
        this.initialize();
    }

    private initialize(){
        this.hobbyList.push(new Hobby('basketball', 'dunks and hoops'));
        this.hobbyList.push(new Hobby('hiking', 'discover nature'));
        this.hobbyList.push(new Hobby('travelling', 'discover texas!!!'));
    }

    private searchHobby(searchString: string){
        console.log(this.hero.heroId);
    }
}

export class HeroHobbyComponent implements ng.IComponentOptions{
    templateUrl: string = '';
    controller: any = {};
    transclude: boolean;
    bindings: any = {};
    constructor(){
        let component = this;
        component.templateUrl = '../templates/herohobby/herohobby.template.html';
        component.controller = HeroHobbyCtrl;
        component.transclude = true;
        component.bindings = {
            hero: '<'
        }
    }
}