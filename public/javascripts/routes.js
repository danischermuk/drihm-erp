'use strict';

/**
 * Route configuration for the RDash module.
 */
 angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'templates/settings.html'
        })
        .state('suppliers', {
            url: '/suppliers',
            templateUrl: 'templates/suppliers.html',

            resolve: {
                suppliers: ['supplierService',
                function(supplierService) {
                    return supplierService.getSuppliers();
                }]
            },

            controller: 'SuppliersCtrl'
        })
        .state('supplier', {
            url: '/supplier/:supplierId',
            templateUrl: 'templates/supplier.html',

            resolve: {
                supplier: ['$stateParams', 'supplierService',
                function($stateParams, supplierService) {
                    return supplierService.getSupplier($stateParams.supplierId);
                }]
            },

            controller: 'SupplierCtrl'
        });
    }
    ]);