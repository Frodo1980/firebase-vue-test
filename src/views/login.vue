<template>
  <v-container>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      prepend-icon="mdi-at"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      prepend-icon="mdi-lock"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      name="input-10-2"
      @click:append="show = !show"
    ></v-text-field>

    <v-btn color="success" class="mr-4" @click="login">
      Anmelden
    </v-btn>
    <v-btn color="alert" class="mr-4" @click="logout">
      Logout
    </v-btn>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: () => ({
    show: false,
    password: '',
    email: ''
  }),

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          // Signed in
          console.log(user)
          alert(user.user.displayName + ' ist eingeloggt')
        })
        .catch(error => {
          var errorCode = error.code
          var errorMessage = error.message

          console.log(errorCode)
          console.log(errorMessage)
          alert(errorMessage)
        })
    },
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
