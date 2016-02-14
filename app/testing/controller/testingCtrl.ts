import { ITestingScope } from '../interface/ITestingScope';

export class TestingCtrl {
        
    public static $inject = ['$scope'];
    
    constructor(private $scope: ITestingScope){
        $scope.name = 'khris';
    }
}