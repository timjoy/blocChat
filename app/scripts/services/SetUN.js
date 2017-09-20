(function() {
  function SetUN($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username

        $uibModal.open({
          controller: 'SetUNModalCtrl',
          controllerAs: 'setUNModal',
          templateUrl: '/templates/SetUNModal.html'
        });

    }
    var username = null;
    SetUN.addName = function($cookies, username){
      $cookies.put(key, username);
      username = currentUser
    };
    console.log('cookiesgetkey', $cookies.get('key'));

  }

  angular
    .module('blocChat')
    .run(['$cookies','$uibModal', SetUN]);
})();
