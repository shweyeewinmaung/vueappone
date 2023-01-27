import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/global.css"
 
import Pagination from 'v-pagination-3';

const app = createApp(App);

app.config.globalProperties.$baseUrl="http://localhost:3000/"
app.config.globalProperties.$assetUrl="http://localhost:3000/uploads/"
 
app.component('pagination', Pagination);
 
app.use(router);
app.mount("#app");

// createApp(App).use(router).mount('#app')
