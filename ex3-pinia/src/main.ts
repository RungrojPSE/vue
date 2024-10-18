// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
// import { pinia } from './store2';
import { createPinia } from 'pinia';
const pinia = createPinia();

const app = createApp(App);
app.use(pinia); // Use Pinia

app.mount('#app');
