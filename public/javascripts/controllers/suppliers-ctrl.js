angular.module('RDash')
.controller('SuppliersCtrl', ['$scope', 'suppliers', '$location','$mdSidenav', '$timeout', 'userService', 'supplierService', '$mdDialog', '$stateParams',  SuppliersCtrl]);


function SuppliersCtrl($scope, suppliers, $location, $mdSidenav, $timeout, userService, supplierService,  $mdDialog, $stateParams) {
	console.log("suppliers ctrl open");
	console.log(suppliers.data);
	$scope.suppliers = suppliers.data;

	$scope.toolbar.title = "Proveedores";
}
