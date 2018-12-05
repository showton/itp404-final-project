import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    composeReview(event) {
      event.preventDefault();
      // read out inputs
      console.log(this.review);

      //save a post model
      let review = this.store.createRecord("review", {
        review: this.review,
        company: this.model
      });
      //save post and redirect back to index
      review.save().then(() => {
        this.transitionToRoute("company");
      });
    },
    deleteReview(review) {
      let confirmed = window.confirm(
        "Are you sure you want to delete this review?"
      );

      if (confirmed) {
        console.log("destroy record test");
        let review = this.store.findRecord("review", {
          review: this.review,
          company: this.model
        });
        review.destroyRecord().then(() => {
          console.log("test");
          this.transitionToRoute("company");
          console.log("test again");
        });
      }
    },
    editReview(review, event) {
      event.preventDefault();
      //save the post
      // let post = this.model;
      review.save().then(() => {
        this.transitionToRoute("company");
      });
    }
  }
});
