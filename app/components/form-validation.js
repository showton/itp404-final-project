import Ember from "ember";
import formValidation from "ember-form-validation/mixins/form-validation";
import Component from "@ember/component";

export default Component.extend(formValidation, {
  validate: {
    form: {
      review: {
        required: true,
        format: words,
        message: "Name error",
        requiredMessage: "You must enter a name",
        customFormatMessage: "Custom name error",
        formatMessage: "Please enter a real word",
        word: {
          minLength: 2,
          minLengthMessage: "Please enter a word with at least 2 letters",
          maxLength: 15,
          maxLengthMessage: "Please enter a word with less than 15 letters"
        }
      }
    }
  },
  actions: {
    yourAction() {
      const form = {
        review: "name value"
      };

      this.send("validate_form_action", form);
    }
  }
});
