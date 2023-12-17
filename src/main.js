import { createApp } from 'vue'


import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';


import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faMoon, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { router } from './router/router'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"


const app = createApp(App);

import App from '@/paginas/Pagina.vue'
//import App from '@/exemplos/Diretivas.vue'

library.add([faPhone,faMoon, faEnvelope, faLock]);

app.component('Button', Button)
.use(router)
.use(PrimeVue)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')

