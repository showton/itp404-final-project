import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  yelp: DS.attr("number"),
  phone: DS.attr("string"),
  website: DS.attr("string"),
  address: DS.attr("string")
});
