'use strict';

import 'angular';

class HeroDetailCtrl {
    public ability: string = '';
    public strength: number = 0;
    constructor(){
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
