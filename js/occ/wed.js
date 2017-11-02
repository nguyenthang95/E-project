angular.module('sortApp', [])
.controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchName = '';     // set the default search/filter term
    $scope.sort_filter = [
        { name: 'Mr. and Mrs. Wedding Card', price: 6.99 ,img : 'images/wed/wed1.jpg'},
        { name: 'A Toast for You Wedding Card', price: 6.99 ,img : 'images/wed/wed2.jpg'},
        { name: 'Laser-Cut Floral Wedding', price: 5.99 ,img : 'images/wed/wed3.jpg'},
        { name: 'So Very Right Wedding Card', price: 2.99 ,img : 'images/wed/wed4.jpg'},
        { name: 'Wedding Blessing Religious Card', price: 3.99 ,img : 'images/wed/wed5.jpg'},
        { name: 'Hot Air Balloons Engagement Card', price: 3.99 ,img : 'images/wed/wed6.jpg'},
        { name: 'Joy, Laughter and Love Wedding Card', price: 4.99 ,img : 'images/wed/wed7.jpg'},
        { name: 'Dance With Happiness Wedding Card', price: 2.99 ,img : 'images/wed/wed8.jpg'},
        { name: 'Daughter and Son-in-Law Wedding Card', price: 3.99 ,img : 'images/wed/wed9.jpg'},
       
      
        
        
       
    ];
});
