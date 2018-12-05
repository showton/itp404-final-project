import DS from "ember-data";

export default DS.Model.extend({
  review: DS.attr("string"),
  company: DS.belongsTo("company")
});
