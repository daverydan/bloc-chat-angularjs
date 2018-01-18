(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.clicked = function(item) {
			Room.selected = item;
    }

    Room.isActive = function(item) {
			return Room.selected === item;
		};
    
    /**
    * @desc Sets the room name
    * @type {String}
    */
    Room.setRoomName = function(name) {
	    Room.roomTitle = name;
	    /*console.log(this)
	    if (Room.activeRoom !== 'active-room') {
	    	Room.activeRoom = 'active-room';
	    } else {
	    	Room.activeRoom = '';
	    }*/
    }

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
