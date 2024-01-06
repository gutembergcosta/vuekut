import { createApp } from 'vue'


import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

import { router } from './router/router'
import PrimeVue from 'primevue/config';

const app = createApp(App);

import App from '@/paginas/Pagina.vue'

app
.use(router)
.use(PrimeVue)
.mount('#app')

