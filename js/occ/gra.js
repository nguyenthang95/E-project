angular.module('sortApp', [])
.controller('mainController', function ($scope) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchName = '';     // set the default search/filter term
    $scope.sort_filter = [
        { name: 'Congratulated Graduation Card', price: 3.99 ,img : 'images/gra/gra1.jpg'},
        { name: 'Gold Dot Graduation Card for Son', price: 3.99 ,img : 'images/gra/gra2.jpg'},
        { name: 'Compliments Graduation Card', price: 4.99 ,img : 'images/gra/gra3.jpg'},
        { name: 'Follow Your Heart Graduation Card', price: 3.99 ,img : 'images/gra/gra4.jpg'},
        { name: 'Snoopy Smarty-Pants Graduation', price: 5.99 ,img : 'images/gra/gra5.jpg'},
        { name: 'Daughter Congratulations Card', price: 3.99 ,img : 'images/gra/gra6.jpg'},  
        { name: 'Snoopy Nursing School Graduation Card', price: 4.99 ,img : 'images/gra/gra7.jpg'},
        { name: 'Law Degree Graduation Card', price: 5.99 ,img : 'images/gra/gra8.jpg'},
        { name: 'Congratulated Graduation Card', price: 4.99 ,img : 'images/gra/gra9.jpg'},
        
        
       
    ];
});
