import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | single-company", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", function(assert) {
    // server.create("company", {
    //   name: "Company Name",
    //   // rating: 1.5,
    //   phone: "123-456-7890",
    //   website: "Website",
    //   address: "123 Example Drive"
    // });
    this.render(hbs`
      <SingleCompany @company={{company}} />
    `);
    this.set("company", "Company Name");
    // Template block usage:

    assert.equal(this.$("#companyName").text(), "Company Name");

    // assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
