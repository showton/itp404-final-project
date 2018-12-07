import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.store.findAll("company");
  },
  actions: {
    error(error) {
      this.notifier.error(error);
      return true;
    }
  },
  title: "Companies Page"
});
