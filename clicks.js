var app = angular.module('myapp', []);
app.controller('main', MainCtrl);

function MainCtrl() {
  var vm = this;
  vm.text = 'Hello Angular';
  
  vm.clicks = 0;
  
  vm.clicked = function() {
    vm.clicks++;
  };
}