<template>
  <v-container>
    <h1>Testseite</h1>

    <v-text-field v-model="Name" label="Name">Name</v-text-field>
    <v-text-field v-model="Vorname" label="Vorname">Name</v-text-field>
    <v-date-picker v-model="Datum"></v-date-picker>
    {{ Datum }}
    <div class="text-center">
      <v-btn rounded color="primary" dark @click="datenSpeichern">
        Datensatz speichern
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: () => ({
    Name: '',
    Vorname: '',
    Datum: ''
  }),

  methods: {
    async datenSpeichern() {
      const db = firebase.firestore()
      const docRef = db.collection('Kontakte').doc()
      //const docRef = db.collection('Kontakte').doc('alovelace') doc gelöscht, damit ID vergeben wird

      await docRef.set({
        Vorname: this.Vorname,
        Nachname: this.Name,
        Geburtstag: this.Datum
      })
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
