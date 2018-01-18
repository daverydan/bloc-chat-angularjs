(function() {
  function HomeCtrl(Room, $uibModal, Message) {
    /**
    * @desc Stores Room service
    * @type {Object}
    */
    this.roomList = Room;

		/**
    * @desc Stores Message service
    * @type {Object}
    */
    this.messageList = Message;

    /**
    * @func open
    * @desc Defines & opens modal
    */
    this.open = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
      }).result.catch(function(){}, function(res){});
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
