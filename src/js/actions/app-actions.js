var ApppConstants = require('../constants/app-constants')
var ApppDispatcher = require('../dispatchers/app-dispatcher')

var AppActions = {
  addItem : function (item) {
    ApppDispatcher.handleViewAction({
      actionType: ApppConstants.ADD_ITEM,
      item: item
    })
  },
  removeItem : function (index) {
    ApppDispatcher.handleViewAction({
      actionType: ApppConstants.REMOVE_ITEM,
      index: index
    })
  },
  increaseItem : function (index) {
    ApppDispatcher.handleViewAction({
      actionType: ApppConstants.INCREASE_ITEM,
      index: index
    })
  },
  decreaseItem : function (index) {
    ApppDispatcher.handleViewAction({
      actionType: ApppConstants.DECREASE_ITEM,
      index: index
    })
  }
};

module.exports = AppActions;