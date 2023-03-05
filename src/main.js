import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
  Buffer
} from 'buffer';
window.Buffer = Buffer;
import VueClipboard from 'vue-clipboard2';

createApp(App).use(VueClipboard).mount('#app')
