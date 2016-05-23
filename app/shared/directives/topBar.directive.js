/**
 * Created by DA on 28/04/2016.
 */

(function(app){
    'use strict'
    app.directive('topBar', topBar);
    function topBar(){
        return{
            restrict: 'E',
            replace: true,
            templateUrl: '/app/shared/directives/topBar.html'
        }
    }
})(angular.module('ui'))