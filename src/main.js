import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,

  created: function() {
    alert('Created-Lifecycle-Hook wird ausgeführt')
    const firebaseConfig = {
      apiKey: 'AIzaSyBGm-VFXIZpcNJbZVxslCN9tIWmJ7iM73w',
      authDomain: 'vue-testapp-5f009.firebaseapp.com',
      databaseURL: 'https://vue-testapp-5f009.firebaseio.com',
      projectId: 'vue-testapp-5f009',
      storageBucket: 'vue-testapp-5f009.appspot.com',
      messagingSenderId: '583321436893',
      appId: '1:583321436893:web:0e3fe456fc1a2e52b01134',
      measurementId: 'G-KKBZJTWP0H'
    }

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  },

  vuetify,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
