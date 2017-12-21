(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    /**
    * @desc To store firebase array
    * @type {Array}
    */
    Room.all = rooms;

    /**
    * @func add
    * @desc Adds room to rooms(firebase array)
    */
    Room.add = function(room) {
      rooms.$add({ room });
      this.room = '';
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
