import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Helper | truncate-text", function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test("it renders", async function(assert) {
    this.set("inputValue", "1234");
    this.set("sign", "...");

    await render(hbs`{{truncate-text inputValue sign=sign}}`);

    assert.equal(this.element.textContent.trim(), "1234...");
  });

  test("truncated characters", async function(assert) {
    this.set("text", "random text");
    this.set("length", 2);
    await render(hbs`{{truncate-text text length}}`);

    assert.equal(this.element.textContent.trim(), "ra...");
  });

  test("not truncated if short", async function(assert) {
    this.set("text", "random text");
    this.set("length", 30);
    await render(hbs`{{truncate-text text length}}`);

    assert.equal(this.element.textContent.trim(), "random text");
  });
});
