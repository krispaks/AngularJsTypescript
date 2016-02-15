import 'angular';
import { HeroDetailScope } from './herodetail.scope';

class HeroDetailCtrl {
    public ability: string = '';
    public strength: number = 0;
    constructor(private $scope: HeroDetailScope){
        var ctrl = this;
        ctrl.ability = 'invisible';
        ctrl.strength = 200;
    }
}

export class HeroDetailComponent implements ng.IComponentOptions {
    constructor(){
    }
    
    templateUrl = './app/components/herodetail/herodetail.template.html';
    controller = HeroDetailCtrl;
}

/*export class HeroDetailComponent {
    constructor(){}
    templateUrl: string = 'herodetail.template.html';
    controller: any = HeroDetailCtrl;
    bindings: any = {
                        ability: '@',
                        strength: '<'
                    }
}*/

/*export var app = angular.module('testing')
                .component('heroDetail', {
                    templateUrl: 'herodetail.template.html',
                    controller: HeroDetailCtrl,
                    bindings: {
                        ability: '@',
                        strength: '<'
                    }
                });*/