import {
  Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure,
} from 'vee-validate';
// Because of Eslint Rule, naming with underscore _ is not available
import {
  required, min, max, alpha_spaces as alphaSpaces,
  email, min_value as minVal, max_value as maxVal,
  confirmed, not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  // app -> Vue instance, options -> additional data to pass vue instance
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    // For TOS = Terms of Service input
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
    defineRule('minVal', minVal);
    defineRule('maxVal', maxVal);
    defineRule('passwordMismatch', confirmed);
    defineRule('excluded', excluded);
    // For specific input rule
    defineRule('countryExcluded', excluded);

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `The field ${context.field} is required.`,
          min: `The field ${context.field} is too short.`,
          max: `The field ${context.field} is too long.`,
          alphaSpaces: `The field ${context.field} may only contain alphabetic characters and spaces.`,
          email: `The field ${context.field} must be a valid email.`,
          minVal: `The filed ${context.field} is too low.`,
          maxVal: `The filed ${context.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${context.field}`,
          countryExcluded: 'Due to restrictions, we do not accept users from this location.',
          passwordMismatch: 'The passwords don\'t match.',
          tos: 'You must accept Terms of Service.',
        };

        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is not valid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      // Below will invoke validation functions on every keystroke on input
      validateOnInput: false,
      // For the case when using v-model on input
      validateOnModelUpdate: true,
    });
  },
};
