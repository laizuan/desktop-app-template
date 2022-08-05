import { createApp } from 'vue';
import 'virtual:windi.css';
import App from '/@/App.vue';
import router from './router';
import { registerGlobalComponents } from './registerGlobalComponents';
import 'element-plus/dist/index.css';

const app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.mount('#app');
