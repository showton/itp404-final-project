import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.findRecord("company", params.id);
  },
  setupController(controller, model) {
    //stop default behavior
    this._super(controller, model);
    //set controller title and body to empty string on refresh
    controller.set("review", " ");
  },
  titleToken: "Companies"
});
