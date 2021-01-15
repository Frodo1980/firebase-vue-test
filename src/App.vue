<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Imkerei Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="150"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="logout" text>
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/signup">SignUp</router-link>|
      <router-link to="/testseite">Testseite</router-link>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
          alert('Sie wurden erfolgreich ausgeloggt!')
        })
        .catch(function(error) {
          // An error happened.
          alert(error.message)
        })
    }
  }
}
</script>
