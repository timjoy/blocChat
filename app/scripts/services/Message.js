(function() {
  function Message($firebaseArray, Room) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    // (the UID of the Room.activeroom) = activeroomId;
    // Room.activeroom.Id = roomId;
    // Room.activeroom.UID = activeroomId;
    // Room.activeroom = activeroomId;
    console.log("roomId!!!");
    Room.activeroom.$UID = activeroomId;
    console.log("roomId!!!");
    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      // ref.orderByChild(Message.roomId).equalTo()...
      ref.orderByChild("roomId").equalTo(activeroomId);
        console.log(snapshot.val());
        console.log (roomId, activeroomId);
    };

    // this is a query that finds all messages that have
    // a roomId (of the activeroom) that is equal to
    // (the roomId of activeroom(in home.html?))



    // .child() method can either query an existing set of
    // data or reference one you intend to populate with
    // data in the future.  The $firebaseArray service
    // is used to ensure the data is returned as an array
    return Message;
  };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', 'Room', Message]);
})();
// https://blocchat-4058a.firebaseio.com/
