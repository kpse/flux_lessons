var Dispather = require('./dispatcher.js');
var merge = require('react/lib/merge');

var AppDispatcher = merge(Dispather.prototype, {
  handleViewAction: function (action) {
    console.log('fired action', action)
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
})

module.exports = AppDispatcher;