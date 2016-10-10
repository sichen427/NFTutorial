// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
//注册starter模块，本项目的依赖包为'ionic'和'starter.controllers'模块
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  //根据angularjs文档Use this method to register work which should be performed when the injector is done loading all modules.
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  //config 根据angularjs文档
  //Use this method to register work which needs to be performed on module loading. For more about how to configure services, see Provider Recipe.
  //$stateProvider.state:Registers a state configuration under a given state name. The stateConfig object has the following acceptable properties.
  //定义menu画面
  $stateProvider
      .state('login', {
        url: '/login',
        abstract: false,
        templateUrl: 'templates/mylogin.html',
        controller: 'LoginCtrl'
      })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  //来自api Defines a path that is used when an invalid route is requested.
  $urlRouterProvider.otherwise('/app/playlists');
});
