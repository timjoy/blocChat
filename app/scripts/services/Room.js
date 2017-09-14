(function() {
  function Room($firebaseArray) {
    var Room = {};

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    console.log("Hello!");

    Room.addRoom = function(roomName) {
      rooms.$add(roomName);
      // Room.add(roomName);
    }

    // var activeroom = null;
    Room.SetActive = function(room) {
      // get roomID
      // use roomID to set it to active
      console.log("activeroom!");
      var activeroom = room;
      // Do I need to access the database here?
      // var activeroom = room.roomID;
      // use roomID to set it to active
      return activeroom;

    }
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
