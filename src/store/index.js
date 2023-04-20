import { createStore } from 'vuex';

import coachesModule from './modules/coaches.js';
import requestsModule from './modules/requests.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
