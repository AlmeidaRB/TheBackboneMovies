//MOVIES LISTINGS
var MovieListing = Backbone.Model.extend({
  urlRoot:"http://tiy-fee-rest.herokuapp.com/collections/rachflicks2",
  idAttribute: "_id",
  defaults: function() {
    return {
      poster: 'http://placecage.com/200/200'
    };
  },
  initialize: function() {
    console.log('model was created');
  }
});
