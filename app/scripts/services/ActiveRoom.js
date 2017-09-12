(function() {
    function ActiveRoom(room, $firebaseArray){
      // Somehow capture the room that is
      // clicked on, and set the
      // var ActiveRoom equal to it.
      // var ActiveRoom = room;
      var ActiveRoom = {};
      var ref = firebase.database().ref().child("rooms");
      // var rooms = $firebaseArray(ref);
      //
      // Room.all = rooms;


      ActiveRoom.addRoom = function(room) {
        ActiveRoom.$add(room);
      };

      return ActiveRoom;
    };





//   function activeRoom($firebaseArray, Room) {
//     var activeRoom = function setActiveRoom(){
//         return Room.currentroom;
//     }
//     var ref = firebase.database().ref().child("rooms");
//     var rooms = $firebaseArray(ref);
//
//
//     console.log("woo-woo!");
//
//

      console.log("room!!!");


    angular
        .module('blocChat')
        .factory('ActiveRoom', ['room', '$firebaseArray', ActiveRoom]);
})();
// '$firebaseArray', 'Room',
