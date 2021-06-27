import { Form as VeeForm, Field as VeeField } from 'vee-validate';

export default {
  // app -> Vue instance, options -> additional data to pass vue instance
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
  },
};
