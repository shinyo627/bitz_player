import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      authModalShow: false,
    };
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
});
