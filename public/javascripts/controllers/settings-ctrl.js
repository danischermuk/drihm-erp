angular.module('RDash')
.controller('SettingsCtrl', ['$scope', '$location','$mdSidenav', '$timeout', 'userService', '$mdDialog', SettingsCtrl]);


function SettingsCtrl($scope, $location, $mdSidenav, $timeout, userService, $mdDialog) {
	console.log("settings ctrl open");
	$scope.toolbar.title = "Settings";

}

