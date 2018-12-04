import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  school: DS.attr("string"),
  phone: DS.attr("string"),
  source: DS.attr("string"),
  experience: DS.attr("number"),
  address: DS.attr("string"),
  website: DS.attr("string")
});
