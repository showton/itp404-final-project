import Route from "@ember/routing/route";

export default Route.extend({
  title: function(tokens) {
    tokens = Ember.makeArray(tokens);
    tokens.unshift("");
    return tokens.reverse().join("");
  }
});
