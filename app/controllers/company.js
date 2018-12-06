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
      review.save("Saving...").then(() => {
        this.transitionToRoute("company");
      });
    },
    deleteReview(review) {
      let confirmed = window.confirm(
        "Are you sure you want to delete this review?"
      );

      if (confirmed) {
        console.log("destroy record test");
        review.destroyRecord().then(() => {
          console.log("test");
          this.transitionToRoute("company");
          console.log("record destroyed");
        });
      }
    },
    editReview(review, event) {
      event.preventDefault();
      review.get("updatedTitle");
      review.set("updatedTitle", review.updatedTitle);
      //save the post
      // let post = this.model;
      console.log(this.updatedTitle);
      review.save().then(() => {
        this.transitionToRoute("company");
      });
    }
  }
});
