angular.module('sortApp', [])
.controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchName = '';     // set the default search/filter term
    $scope.sort_filter = [
        { name: 'Blank Thank You Notes', price: 4.49 ,img : 'images/tks/tks1.jpg'},
        { name: 'Gold Borders Thank You Notes', price: 11.99 ,img : 'images/tks/tks2.jpg'},
        { name: 'Many Languages Dogs Thank-You Card', price: 1.99 ,img : 'images/tks/tks3.jpg'},
        { name: 'White Floral Sympathy Thank You', price: 6.99 ,img : 'images/tks/tks4.jpg'},
        { name: 'Thanks to You Jumbo Thank You Card', price: 9.99 ,img : 'images/tks/tks5.jpg'},
        { name: 'Navy and Gold Modern Thank You Notes', price: 7.99 ,img : 'images/tks/tks6.jpg'},
        { name: 'Dog With Flowers Thank You Card', price: 3.59 ,img : 'images/tks/tks7.jpg'},
        { name: 'Colorful Brush Strokes Thank You Card', price: 2.99 ,img : 'images/tks/tks8.jpg'},
        { name: 'Classic Ivory and Gold Thank You Notes', price: 9.99 ,img : 'images/tks/tks9.jpg'},

        
    ];
});
