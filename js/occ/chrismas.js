angular.module('sortApp', [])
.controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchName = '';     // set the default search/filter term
    $scope.sort_filter = [
        { name: 'Holiday Traditions Christmas Cards', price: 14.99 ,img : 'images/chris/chris1.jpg'},
        { name: 'Christmas Love Christmas Cards', price: 9.99 ,img : 'images/chris/chris1.jpg'},
        { name: 'Gang Caroling Christmas Cards', price: 14.99 ,img : 'images/chris/chris1.jpg'},
        { name: 'Warmth and Cheer Christmas Cards', price: 5.99 ,img : 'images/chris/chris1.jpg'},
        { name: 'Holiday Wishes Christmas Cards', price: 5.99 ,img : 'images/chris/chris1.jpg'},
        { name: 'Wreath With Dove Christmas Cards', price: 3.99 ,img : 'images/chris/chris1.jpg'},
        { name: 'Season of Beauty Christmas Cards', price: 7.99 ,img : 'images/chris/chris1.jpg'},
        { name: 'Seasons Snowflakes Christmas Cards', price: 2.99 ,img : 'images/chris/chris1.jpg'},
        { name: 'Wreath With Dove Christmas Cards', price: 9.99 ,img : 'images/chris/chris1.jpg'},
        
       
    ];
});
