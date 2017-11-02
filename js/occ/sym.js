angular.module('sortApp', [])
.controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchName = '';     // set the default search/filter term
    $scope.sort_filter = [
        { name: 'Patterns of Peace Sympathy Card', price: 4.99 ,img : 'images/sym/sym1.jpg'},
        { name: 'Comfort in Time Sympathy Card', price: 1.99 ,img : 'images/sym/sym2.jpg'},
        { name: 'Glowing Wings Care and Concern Card', price: 1.99 ,img : 'images/sym/sym3.jpg'},
        { name: 'Watercolor Landscape Sympathy Card', price: 1.99 ,img : 'images/sym/sym4.jpg'},
        { name: 'Butterflies Sympathy Card', price: 1.99 ,img : 'images/sym/sym5.jpg'},
        { name: 'The Spirit Echoes Still Sympathy Card', price: 2.99 ,img : 'images/sym/sym6.jpg'},
        { name: 'The Spirit Echoes Still Sympathy Card', price: 2.99 ,img : 'images/sym/sym7.jpg'},
        { name: 'Beautiful Soul Sympathy Card', price: 2.99 ,img : 'images/sym/sym8.jpg'},
        { name: 'Bastin Birds in Nature Sympathy Card', price: 2.99 ,img : 'images/sym/sym9.jpg'},
      
        
        
       
    ];
});
