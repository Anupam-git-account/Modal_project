// Vue 3 style
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/global.css';

// Import Font Awesome core and components
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import specific Font Awesome icons
import { faUser, faHome, faEnvelope,faClock,faClipboardList, faUniversalAccess, faUnlock,faPenSquare, faBookmark   } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faUser, faHome, faEnvelope,faClock,faClipboardList, faUniversalAccess, faUnlock,faPenSquare, faBookmark  );

const app = createApp(App);

// Register the Font Awesome Icon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router and mount the app
app.use(router);
app.mount('#app');
