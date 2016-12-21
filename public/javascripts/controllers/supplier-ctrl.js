angular.module('RDash')
.controller('SupplierCtrl', ['$scope', 'supplier', '$location','$mdSidenav', '$timeout', 'userService', 'supplierService', '$mdDialog', '$stateParams',  SupplierCtrl]);


function SupplierCtrl($scope, supplier, $location, $mdSidenav, $timeout, userService, supplierService,  $mdDialog, $stateParams) {
	console.log("supplier ctrl open");
	console.log(supplier.data);
	$scope.supplier = supplier.data;
}
