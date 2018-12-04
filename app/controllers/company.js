import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    composeReview(event) {
      event.preventDefault();
      // read out inputs
      console.log(this.review);

      //save a post model
      let review = this.store.createRecord("review", {
        review: this.review
      });
      //save post and redirect back to index
      review.save().then(() => {
        this.transitionToRoute("company");
      });
    }
  }
});
