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

.controller('LoginCtrl',function ($scope,$state,$http) {

  // Form data for the login modal
  $scope.loginData = {};

  $scope.doLogin = function() {

    /*
  $http({
    method: 'GET',
  headers: {
     'Content-Type': 'application/json'
   },
   //TODO 这里要解决跨域的问题
    url: 'http://127.0.0.1:8081/appserver/appData.json'
    //url: 'appData.json'
  }).then(function successCallback(response) {
      alert("通信成功");
      $state.go("app.playlists");
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      alert('通信错误');
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  */

    //TODO 登录需要抽成service来做
    if (("admin" == $scope.loginData.username) && ("admin" == $scope.loginData.password)) {
      alert("密码正确！");
      $state.go("app.search");
    } else {
      alert("密码不正确！");
    }
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
.controller('SearchCtrl',function($scope) {
  $scope.showListResult = false;
  $scope.doSearch = function() {
    $scope.showListResult = true;
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
;
