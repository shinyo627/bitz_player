import {
  Form as VeeForm, Field as VeeField, defineRule, ErrorMessage,
} from 'vee-validate';
import { required } from '@vee-validate/rules';

export default {
  // app -> Vue instance, options -> additional data to pass vue instance
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
  },
};
