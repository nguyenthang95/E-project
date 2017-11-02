angular.module('sortApp', [])
.controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchName = '';     // set the default search/filter term
    $scope.sort_filter = [
        { name: 'Witch is Clothes Halloween Card', price: 7.99 ,img : 'images/halo/ha1.jpg'},
        { name: 'Dancing Skeleton Halloween Love Card', price: 5.99 ,img : 'images/halo/ha2.jpg'},
        { name: 'Pumpkin Drink Musical Halloween Card', price: 5.99 ,img : 'images/halo/ha3.jpg'},
        { name: 'Candy Corn Boo Halloween Card', price: 7.99 ,img : 'images/halo/ha4.jpg'},
        { name: 'Wishes for Grandson Halloween Card', price: 4.99 ,img : 'images/halo/ha5.jpg'},
        { name: 'Tricks and Treats Halloween Card', price: 5.99 ,img : 'images/halo/ha6.jpg'},
        { name: 'Just a Little Boo Halloween Card', price: 5.99 ,img : 'images/halo/ha7.jpg'},
        { name: 'Stinky Curse Halloween Sound Card', price: 4.99 ,img : 'images/halo/ha8.jpg'},
        { name: 'Orange and Black Owl Halloween Card', price: 5.99 ,img : 'images/halo/ha9.jpg'},
     
});
