angular.module('sortApp', [])
.controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchName = '';     // set the default search/filter term
    $scope.sort_filter = [
        { name: 'New Home Congratulations Card', price: 3.99 ,img : 'images/congra/con01.jpg'},
        { name: 'Hell Yes Congratulations Blank Card', price: 2.99 ,img : 'images/congra/con2.jpg'},
        { name: 'Spanish-Language Congratulations Card', price: 1.99 ,img : 'images/congra/con3.jpg'},
        { name: 'Cocktails Congratulations Card', price: 3.99 ,img : 'images/congra/con4.jpg'},
        { name: 'Watercolor Mazel Congratulations Card', price: 3.99 ,img : 'images/congra/con5.jpg'},
        { name: 'Smiley Face Toast Congratulations Card', price: 2.99 ,img : 'images/congra/con6.jpg'},
        { name: 'Job Promotion Congratulations Card', price: 2.99 ,img : 'images/congra/con7.jpg'},
        { name: 'Floral Congratulations Card', price: 3.99 ,img : 'images/congra/con8.jpg'},
        { name: 'You Made It! Congratulations Card', price:2.99 ,img : 'images/congra/con9.jpg'},
    ];
});
