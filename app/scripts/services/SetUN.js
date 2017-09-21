(function() {
  function SetUN($cookies, $uibModal) {
    var currentUser = $cookies.get('username');
    // if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username

        $uibModal.open({
          controller: 'SetUNModalCtrl',
          controllerAs: 'setUNModal',
          templateUrl: '/templates/SetUNModal.html'
        });

    // }



  }

  angular
    .module('blocChat')
    .run(['$cookies','$uibModal', SetUN]);
})();
