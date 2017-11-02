angular.module('sortApp', [])
.controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchName = '';     // set the default search/filter term
    $scope.sort_filter = [
        { name: 'Couple of Poppies Anniversary Card', price: 2.99 ,img : 'images/Aniversary/ani1.jpg'},
        { name: 'Retro Snoopy Anniversary Card', price: 3.99 ,img : 'images/Aniversary/ani2.jpg'},
        { name: 'Mickey and Minnie Anniversary Card', price: 6.99 ,img : 'images/Aniversary/ani3.jpg'},
        { name: 'Wrong or Lucky Anniversary Card', price: 3.99 ,img : 'images/Aniversary/ani4.jpg'},
        { name: 'Both of You Anniversary Card', price: 2.99 ,img : 'images/Aniversary/ani5.jpg'},
        { name: '"I Do" Anniversary Card', price: 3.99 ,img : 'images/Aniversary/ani6.jpg'},
        { name: 'Always Been You Anniversary Card', price: 4.99 ,img : 'images/Aniversary/ani7.jpg'},
        { name: 'New Position Funny Love Card', price: 2.99 ,img : 'images/Aniversary/ani8.jpg'},
        { name: 'Love Birds Pop Up Anniversary Card', price: 6.99 ,img : 'images/Aniversary/ani9.jpg'},
       
    ];
});
