/**
 * Master Controller
 */

 angular.module('RDash')
 .controller('MasterCtrl', ['$scope', '$location','$mdSidenav', '$timeout', 'userService', '$mdDialog', '$state', 'socket', MasterCtrl]);


 function MasterCtrl($scope, $location, $mdSidenav, $timeout, userService, $mdDialog, $state, socket) { 
  console.log("master ctrl open");

  socket.emit('event', "eventooooo");

  $scope.current       = {};

  $scope.go = function ( state ) {
   console.log(state);
   $state.go( state );
 };

 $scope.showSupplier = function (supplier) {
  $scope.toolbar.title = supplier.name;
  $state.go ('supplier', {supplierId: supplier._id});
};


 

 $scope.users         = {};
 $scope.currentUser   = {};
 $scope.userMenu      = {};
 $scope.toolbar       = {};

 $scope.toolbar.title = "Toolbar";

 
	 /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
     $scope.debounce = function(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
        args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    };
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
     $scope.buildDelayedToggler=function (navID) {
      return $scope.debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID).toggle();
      }, 200);
    };
    
    

    $scope.toggleLeft = $scope.buildDelayedToggler('left');	
    $scope.closeLeft = function () {
      $mdSidenav('left').close();
    };

$scope.dashboard = {  "name":   "Dashboard",
    "url":    "/#",
    "type":   "item",
    "iconUrl":  "/images/dash.svg",             
};

 
$scope.settings = { "name":   "Settings",
"url":    "/settings",
"type":   "item",
"iconUrl":  "/images/settings.svg",             
};                  
}



