import Controller from "@ember/controller";
import RSVP from "rsvp";
import { later } from "@ember/runloop";

export default Controller.extend({
  actions: {
    saveReview() {
      return new RSVP.Promise(resolve => {
        later(() => {
          resolve();
        }, 2000);
      });
    }
  }
});
