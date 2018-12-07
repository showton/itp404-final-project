import Route from "@ember/routing/route";

export default Route.extend({
  setupController(controller, error) {
    console.log(error.message);
    this._super(...arguments);
  },
  titleToken: "Error Page"
});
