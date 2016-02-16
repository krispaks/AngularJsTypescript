import { TestingScope } from '../interface/TestingScope';

export class TestingCtrl {
        
    public static $inject = ['$scope'];
    
    constructor(private $scope: TestingScope){
        $scope.name = 'Team Pineapple';
    }
}