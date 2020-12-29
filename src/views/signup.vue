<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="20"
        :rules="nameRules"
        prepend-icon="mdi-account"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        prepend-icon="mdi-at"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        prepend-icon="mdi-lock"
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show ? 'text' : 'password'"
        hint="Mindestens 8 Stellen"
        @click:append="show = !show"
        required
      ></v-text-field>

      <v-text-field
        prepend-icon="mdi-lock"
        v-model="confirmedPassword"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[comparePassword]"
        :type="show2 ? 'text' : 'password'"
        @click:append="show2 = !show2"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'Sie müssen zustimmen']"
        label="Ich akzeptiere die Nutzungsbedingungen?"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Registrieren
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        Zurücksetzen
      </v-btn>
    </v-form>
    Nutzer: {{ Benutzer.Name }} UID: {{ Benutzer.Nummer }} Mail:
    {{ Benutzer.NutzerMail }}

    <v-btn color="error" class="mr-4" @click="datenSpeichern">
      Daten speichern
    </v-btn>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: () => ({
    Benutzer: {
      Name: 'Kein Name',
      Nummer: 'keine UID',
      NutzerMail: 'keine Mailadresse'
    },

    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Bitte geben Sie einen Namen an',
      v => (v && v.length <= 20) || 'der Name darf max. 20 Zeichen lang sein'
    ],
    email: '',

    emailRules: [
      v => !!v || 'E-mail bitte eingeben',
      v => /.+@.+\..+/.test(v) || 'E-mail ungültig'
    ],
    checkbox: false,
    show: false,
    show2: false,
    password: '',
    confirmedPassword: '',
    rules: {
      required: value => !!value || 'Erforderlich!',
      min: v => v.length >= 8 || 'mindestens 8 Stellen'
    }
  }),

  methods: {
    async datenSpeichern() {
      const db = firebase.firestore()
      const docRef = db.collection('users').doc('alovelace')

      await docRef.set({
        first: 'Michael',
        last: 'Lüssem',
        born: 1980
      })
    },
    validate() {
      this.$refs.form.validate()

      if (this.checkbox) {
        //User anlegen
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.confirmedPassword)
          .then(user => {
            console.log(user)
            this.Benutzer.Name = user.user.displayName
            this.Benutzer.NutzerMail = user.user.email
            this.Benutzer.Nummer = user.user.uid
            this.Benutzer.Name = this.name
            var currentuser = firebase.auth().currentUser
            currentuser
              .updateProfile({
                displayName: this.name
              })
              .then(function(user) {
                // Update successful.
                console.log(user)
              })
              .catch(function(error) {
                // An error happened.
                console.log(error)
              })
          })

          .catch(err => console.error(err))
      }

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log('eingeloggt')
        } else {
          // No user is signed in.
          console.log('Nö, nicht eingeloggt')
        }
      })
    },
    reset() {
      this.$refs.form.reset()
    }
  },
  computed: {
    comparePassword() {
      return this.password !== this.confirmedPassword
        ? 'Passwörter nicht identisch!'
        : true
    }
  }
}
</script>
