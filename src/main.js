import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app'

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'

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
  render: h => h(App)
}).$mount('#app')
