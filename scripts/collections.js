//Movie Collection

var MovieCollection = Backbone.Collection.extend({
  url: "http://tiy-fee-rest.herokuapp.com/collections/rachflicks2",
  model: MovieListing
});
