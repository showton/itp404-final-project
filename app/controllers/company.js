import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    updateRating(params) {
      let { item: review, rating } = params;
      review.set("rating", rating);
      return review.save();
    },
    composeReview(event) {
      event.preventDefault();
      let review = this.store.createRecord("review", {
        review: this.review,
        company: this.model
      });
      review.save().then(() => {
        this.transitionToRoute("company");
      });
    },
    deleteReview(review) {
      let confirmed = window.confirm(
        "Are you sure you want to delete this review?"
      );
      if (confirmed) {
        review.destroyRecord().then(() => {
          this.transitionToRoute("company");
        });
      }
    },
    editReview(review, event) {
      event.preventDefault();
      review.set("review", this.updatedTitle);
      review.save().then(() => {
        this.transitionToRoute("company");
      });
    },
    toggleBody() {
      this.toggleProperty("isTooLong");
    }
  }
});
