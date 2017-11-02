    angular.module('sortApp', [])
        .controller('mainController', function ($scope) {
            $scope.sortType = 'name'; // set the default sort type
            $scope.sortReverse = false;  // set the default sort order
            $scope.searchName = '';     // set the default search/filter term
            $scope.sort_filter = [
                { name: 'Grandson Halloween Card', price: 2.99 ,img : 'images/slide/Halloween.jpg'},
                { name: 'Pumpkin Surprise Halloween Card',  price: 2.99 , img : 'images/slide/Halloween2.jpg'},
                { name: 'Bat Halloween Card', price: 2.99 ,img : 'images/slide/Halloween3.jpg'},
                { name: 'Wonderful Christmas Card',  price: 8.99 , img : 'images/slide/chrismas.jpg'},
                { name: 'Merry Chrismoose Christmas Card', price: 5.99 ,img : 'images/slide/chrismas1.jpg'},
                { name: 'Lets Get Merry Christmas Card',  price: 2.99 , img : 'images/slide/chrismas2.jpg'}, 
               
            ];
        });
