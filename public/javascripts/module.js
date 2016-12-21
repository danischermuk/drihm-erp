var app = angular.module('RDash', ['ui.bootstrap', 'ui.router', 'ngMaterial', 'ngMessages', 'btford.socket-io']);

app.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});

app.factory('userService', ['$http', function($http) {

    var urlBase = '/api/user';
    var userService = {};

    userService.getUsers = function () {
        return $http.get(urlBase);
    };

    userService.getMe = function () {
        return $http.get(urlBase + '/me');
    };


    userService.getUser = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    userService.insertUser = function (cust) {
        return $http.post(urlBase, cust);
    };

    userService.updateUser = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    userService.deleteUser = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    userService.getUserMenu = function (id) {
        return $http.get(urlBase + '/' + id + '/menu');
    };


    
    return userService;
}]);

app.factory('supplierService', ['$http', function($http) {

    var urlBase = '/api/supplier';
    var supplierService = {};

    supplierService.getSuppliers = function () {
        return $http.get(urlBase);
    };

    supplierService.getSupplier = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    supplierService.insertSupplier = function (cust) {
        return $http.post(urlBase, cust);
    };

    supplierService.updateSupplier = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    supplierService.deleteSupplier = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return supplierService;
}]);