(function() {
  function HomeCtrl(Room) {
    this.roomList = Room;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
