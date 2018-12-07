import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | async-button", function(hooks) {
  setupRenderingTest(hooks);

  // test('it renders', async function(assert) {
  //   // Set any properties with this.set('myProperty', 'value');
  //   // Handle any actions with this.set('myAction', function(val) { ... });
  //
  //   await render(hbs`{{async-button}}`);
  //
  //   assert.equal(this.element.textContent.trim(), '');
  //
  //   // Template block usage:
  //   await render(hbs`
  //     {{#async-button}}
  //       template block text
  //     {{/async-button}}
  //   `);
  //
  //   assert.equal(this.element.textContent.trim(), 'template block text');
  // });
  test("default text is save", async function(assert) {
    this.set("defaultText", "Save");

    await render(hbs`
      <AsyncButton @defaultText="Save" data-test="publish" />
    `);

    assert.dom('[data-test="publish"]').hasText("Save");
  });

  test("pending text is Saving...", async function(assert) {
    this.set("pendingText", "Saving");

    await render(hbs`
      <AsyncButton @pendingText="Saving..." data-test="publish" />
    `);

    assert.dom('[data-test="publish"]').hasText("Saving...");
  });
});
