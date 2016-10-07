angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  //定义个login的modal
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LoginCtrl',function ($scope,$state) {
  $scope.doLogin = function() {
    alert("开始登录");
    alert("密码正确！");
    $state.go("app.playlists");
  }
})

.controller('PlaylistsCtrl', function($scope) {

  $scope.playlists = [
    { title: '张三1', id: 1 },
    { title: '李四2', id: 2 },
    { title: '王五3', id: 3 },
    { title: '赵六4', id: 4 },
    { title: '张三5', id: 5 },
    { title: '李四6', id: 6 },
    { title: '王五7', id: 7 },
    { title: '赵六8', id: 8 },
    { title: '张三9', id: 9 },
    { title: '李四10', id: 10 },
    { title: '王五11', id: 11 },
    { title: '赵六12', id: 12 },
    { title: '张三13', id: 13 },
    { title: '李四14', id: 14 },
    { title: '王五15', id: 15 },
    { title: '赵六16', id: 16 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
;
