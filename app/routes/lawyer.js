import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    console.log(params.id);
    return this.store.findRecord("lawyer", params.id, { include: "all" });
  },
  title: "Lawyers"
});
