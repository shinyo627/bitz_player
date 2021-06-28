import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './plugins/validation';
import { auth } from './firebase/firebase';

import './assets/tailwind.css';
import './assets/main.css';

let app;

// Calling Firebase for checking user is authenticated before vue instance
// invoked.
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);

    app.mount('#app');
  }
});
