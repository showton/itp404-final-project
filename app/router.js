import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("resources");
  this.route("companies");
  this.route("rights");
  this.route("lawyer"), { path: "/:id" };
  this.route("utilities");
  this.route("company", { path: "/companies/:id" });
  this.route("review", { path: "/reviews/:id" });
  this.route("reviews", { path: "/reviews/:id" });
  this.route("lawyers");
  this.route("loading");
  this.route("error");
});

export default Router;
