import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'; // Import the router
import { createPinia } from 'pinia';

const pinia = createPinia(); // Create the Pinia instance

const app = createApp(App);  // Create the Vue app instance

app.use(pinia);  // Register Pinia
app.use(router); // Register the router

app.mount('#app'); // Mount the app to the DOM
