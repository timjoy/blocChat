(function() {
  function Modal($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    newRoom = function (room) {
        //Use the firebase method $add here
       
       var list = $firebaseArray(new Firebase(URL));

       // add an item
       Room.$add( "name" );


    }


    return Room;
  }

  angular
    .module('blocChat')
    .factory('Modal', ['$firebaseArray', Modal,]);
})();
