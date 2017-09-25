(function() {
  function Message($firebaseArray, Room) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    // newmessage = messages;
    Message.current = messages;
    Message.current = null;


    // assigns the $firebaseArray to the Message object

    // (the UID of the Room.activeroom) = activeroomId;
    // Room.activeroom.Id = roomId;
    // Room.activeroom.UID = activeroomId;
    // Room.activeroom = activeroomId;
    console.log("roomId!!!");
    // Room.activeroom.$Id = activeroomId;

    Message.getByRoomId = function(room) {
      // Filter the messages by their room ID.
      // ref.orderByChild(Message.roomId).equalTo()...

      var newref = ref.orderByChild("roomId").equalTo(room.$id);


      // the next line converts the filtered data
      // to a useable array
      Message.current = $firebaseArray(newref);
      // Message = Message.current;
      console.log('room.$id', room.$id);
      console.log('Message.current', Message.current);
      messages.$add(Message.current);
      // Message = Message.current;
      // return Message;
      return Message.current;
      // return Message.current.orderByChild("content");
      // return Message.current.Child("content");
    };

    Message.send = function(newMessage){
      // make a reference to the database
      // var messref = firebase.database().ref().child("messages");
      // newMessage = $firebaseArray(messref);
      // messref.$set({
      //   newMessage
      // });
      console.log("newMessage!!!!!!");

      // var messref = ref.child("messages");
      // var newMessref.push();
      // newMessref.set({
      //   content: "newMessage";
      // });

      messages.$add(newMessage);
      messages = Message.current;
      return messages;
      return Message.current;



    };
    // this is a query that finds all messages that have
    // a roomId (of the activeroom) that is equal to
    // (the roomId of activeroom(in home.html?))

    // Message.addMessage = function(newmessage,room) {
    //
    //   var newref = ref.orderByChild("roomId").equalTo(room.$id);
    //   newmessage = $firebaseArray(newref);
    //   messages.$add(newmessage);
    //   // Room.add(roomName);
    // }

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
