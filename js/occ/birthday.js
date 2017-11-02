angular.module('sortApp', [])
.controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchName = '';     // set the default search/filter term
    $scope.sort_filter = [
        { name: 'Friend Birthday Card', price: 3.49 ,img : 'images/birthday/bir1.jpg'},
        { name: 'Kind of a Big Deal Birthday Card', price: 4.99 ,img : 'images/birthday/bir2.jpg'},
        { name: 'Snoopy Happy Birthday Card', price: 2.99 ,img : 'images/birthday/bir3.jpg'},
        { name: 'Big Questions Birthday Card', price: 3.49 ,img : 'images/birthday/bir4.jpg'},
        { name: 'Happiest Birthday Ever Card', price: 3.49 ,img : 'images/birthday/bir5.jpg'},
        { name: 're Loved Funny Birthday Card', price: 3.99 ,img : 'images/birthday/bir6.jpg'},
        { name: 'Wonderful Day Birthday Card', price: 2.99 ,img : 'images/birthday/bir7.jpg'},
        { name: 'Garage Sale Funny Birthday Card', price: 3.49 ,img : 'images/birthday/bir8.jpg'},      
        { name: 'Pop up Birthday Card', price: 3.99 ,img : 'images/birthday/bir9.jpg'},
    ];
});
