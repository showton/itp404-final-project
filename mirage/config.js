export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = "/api"; // make this `/api`, for example, if your API is namespaced
  this.timing = 1000; // delay for each request, automatically set to 0 during testing

  //Shorthand cheatsheet:

  this.get("/companies");
  this.get("/reviews");
  this.post("/reviews/:id");
  this.del("/reviews");
  this.post("/companies");
  this.get("/companies/:id");
  this.patch("/companies/:id"); // or this.patch
  // this.del("/companies/:id");
  this.get("/lawyers/:id");
}
