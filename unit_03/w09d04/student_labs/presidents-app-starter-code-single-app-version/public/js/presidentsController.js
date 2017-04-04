angular
  .module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
  var vm = this;

  vm.addPresident = addPresident;
  vm.all = [];
  vm.loadingAll = true;
  vm.newPresident = {};
  vm.title = 'blah';

  activate();

  function activate() {
    loadAllPresidents();
  }

  // TODO: Add presidents#create connection
  function addPresident(){
    concole.log('Adding...');
    vm.all.push(vm.newPresident);
    vm.newPresident = {};
  }
  $http
    .post('/presidents', vm.newPresident)
    .then(function someName(response) {
      vm.all.push(response.data.president);
    });
    .catch(function catch(err) {
      console.log(err);
    });
  function deletePresident(){
    $http
    .delete(president.id)
    
  }

  function loadAllPresidents() {
    $http
      .get('/presidents')
      .then(function resolve(response) {
        vm.all = response.data.presidents;
        vm.loadingAll = false;
      }, function reject(err) {
        vm.loadingAll = false;
      });
  }
}