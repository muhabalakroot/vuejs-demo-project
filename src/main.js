import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index.js';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.use(router);
app.use(store);

app.mount('#app');
