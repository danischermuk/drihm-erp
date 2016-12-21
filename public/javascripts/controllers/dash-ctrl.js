angular.module('RDash')
.controller('DashCtrl', ['$state', '$scope', '$location','$mdSidenav', '$timeout', 'userService', '$mdDialog', '$stateParams',  DashCtrl]);


function DashCtrl($state,  $scope,  $location, $mdSidenav, $timeout, userService, $mdDialog, $stateParams) {
	console.log("dash ctrl open");
	
	$scope.toolbar.title = "DashBoard";

}