import { SpinnerOption } from './spinner.model';

class SpinnerCtrl{
    static $inject = ['$mdDialog'];
    options: SpinnerOption;
    constructor(private $mdDialog: ng.material.IDialogService){
        this.options = {
            parentEl: '',
            show: false
        };
    }

    private showDialog(){
        if(this.options.show){
            this.$mdDialog.show({
                template: `<md-dialog id="spinner" style="background-color: transparent; box-shadow: noe">
                <div layout="row" layout-sm="column" layout-align="center center" aria-label="wait" style="height: 100px;">
                    <md-progress-circular md-mode="inderterminate" md-diameter="70"></md-progress-circular>
                </div>
                 <button ng-click="$ctrl.closeDialog()">X</button>
                <md-button ng-click="$ctrl.closeDialog()" class="md-primary">Close</md-button>
                </md-dialog>`
            });
        }
    }

    closeDialog(){
         this.$mdDialog.hide();
    }

    $onChanges(changeObject){
        this.showDialog();
    }
}

export class SpinnerComponent{
    template: string;
    controller: any;
    bindings: any;
    transclude: boolean;
    constructor(){
	    this.template = `<div>
        <div>`;
        this.controller = SpinnerCtrl;
        this.transclude = true;
        this.bindings = {
            options: '<'
        };    
    }    
}