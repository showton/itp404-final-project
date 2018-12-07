import { computed } from "@ember/object";
import DS from "ember-data";
import { validator, buildValidations } from "ember-cp-validations";

const { attr } = DS;

const Validations = buildValidations(
  {
    review: validator("presence", true)
  },
  {
    debounce: 500
  }
);

export default DS.Model.extend(Validations, {
  name: DS.attr("string"),
  yelp: DS.attr("number"),
  phone: DS.attr("string"),
  website: DS.attr("string"),
  address: DS.attr("string"),
  reviews: DS.hasMany("review"),
  image: DS.attr("string"),
  review: DS.attr("string")
});
