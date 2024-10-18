import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './style.css'
import { useUserStore } from './stores/useUserStore';
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');


// Automatically load state when the store is initialized
const store = useUserStore();
store.loadStateFromLocalStorage();