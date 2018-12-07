import { module, test } from "qunit";
import { visit, currentURL, fillIn, click } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | reviews", function(hooks) {
  setupApplicationTest(hooks);

  // test("visiting /reviews", async function(assert) {
  //   await visit("/reviews");
  //
  //   assert.equal(currentURL(), "/reviews");
  // });

  test("load company data", async function(assert) {
    server.create("company", {
      name: "Company Name",
      // rating: 1.5,
      phone: "123-456-7890",
      website: "Website",
      address: "123 Example Drive"
    });
    await visit("/companies/1");
    assert.dom('[data-test="companyName"]').hasText("Company Name");
    // assert.dom('[data-test="companyRating"]').hasValue(1.5);
    assert.dom('[data-test="companyPhone"]').hasText("123-456-7890");
    assert.dom('[data-test="companyWebsite"]').hasText("Website");
    assert.dom('[data-test="companyAddress"]').hasText("123 Example Drive");
  });

  test("testing delete email", async function(assert) {
    server.create("review");
    window.confirm = () => true;
    await visit("/companies");
    assert.dom('[data-test="each-review"]').exists({
      count: 0
    });
  });

  test("testing compose email", async function(assert) {
    await visit("/companies/1");
    assert.dom('[data-test="each-review"]').exists({
      count: 0
    });
    await fillIn("#review", "jesus@gmail.com");
    await click('[data-test="publish"]');
    assert.dom('[data-test="each-review"]').exists({
      count: 1
    });
  });
});
