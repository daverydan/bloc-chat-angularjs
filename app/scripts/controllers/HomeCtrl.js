(function() {
  function HomeCtrl(Room, $uibModal) {
    /**
    * @desc Stores Room service
    * @type {Object}
    */
    this.roomList = Room;

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
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
