// another way of doing it. but this way seems like it will have a global app variable. - just testing

module app.herohobby {
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
}