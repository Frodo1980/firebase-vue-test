<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        prepend-icon="mdi-at"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        prepend-icon="mdi-lock"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        name="input-10-2"
        @click:append="show = !show"
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Anmelden
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: () => ({
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
        })
        .catch(error => {
          var errorCode = error.code
          var errorMessage = error.message

          console.log(errorCode)
          console.log(errorMessage)
        })
    }
  }
}
</script>
