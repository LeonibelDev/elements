import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// prism.js
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Importa el tema que prefieras

// Importa los lenguajes que quieres soportar
import 'prismjs/components/prism-javascript.min.js';

createApp(App).mount('#app')
