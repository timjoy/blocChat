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

    Room.activeroom = "kayak";
    Room.SetActive = function(room) {
      // get roomID
      // use roomID to set it to active
      console.log("activeroom!");
      Room.activeroom = room;
      console.log(Room.activeroom);
      // Do I need to access the database here?
      // var activeroom = room.roomID;
      // use roomID to set it to active


    }
    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
