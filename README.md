# firebase-vue-test

Dieser Test soll final die Kombination von

- vue (incl. Prerender für SEO)
- vuetify
- firebase
  beschreiben

1. Installation über vue-CLI mit dem Befehl: `vue create <Projektbezeichnung>`
   Hierdurch wird während des Installationsprozesses auch ein git-repository generiert.
   Dieses kann im nächsten Schritt optionl auf github synchronisiert werden
2. mit `npm install firebase` werden die firebase-tools hinzugefügt.
3. Gemäß [Firebase-Dokumentation](https://firebase.google.com/docs/web/setup?authuser=0#node.js-apps) folgende  Codezeilen in die main.js einfügen
```Javascript
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
```
4. In der Vue-Instanz einen "created-Lifecycle-hook" einfügen, damit die Initalisierung von Firebase vor dem Rendering erfolgt
```Javascript
new Vue({
  router,
  created: function() {
    
    const firebaseConfig = {
      apiKey: "AIzaSyBGm-VFXIZpcNJbZVxslCN9tIWmJ7iM73w",
      authDomain: "vue-testapp-5f009.firebaseapp.com",
      databaseURL: "https://vue-testapp-5f009.firebaseio.com",
      projectId: "vue-testapp-5f009",
      storageBucket: "vue-testapp-5f009.appspot.com",
      messagingSenderId: "583321436893",
      appId: "1:583321436893:web:0e3fe456fc1a2e52b01134",
      measurementId: "G-KKBZJTWP0H",
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  },
  render: (h) => h(App),
}).$mount("#app");
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
