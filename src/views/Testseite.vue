<template>
  <v-container>
    <h1>Testseite</h1>

    <v-text-field v-model="Name" label="Name">Name</v-text-field>
    <v-text-field v-model="Vorname" label="Vorname">Name</v-text-field>
    <v-date-picker color="kalender" v-model="Datum"></v-date-picker>
    {{ Datum }}
    <div class="text-center">
      <v-btn rounded color="secondary" dark @click="datenSpeichern">
        Datensatz speichern
      </v-btn>
    </div>

    <v-data-table
      :headers="headers"
      :items="Datenbank"
      :items-per-page="5"
      :item-key="id"
      class="elevation-1"
      @click:row="klickReihe"
    ></v-data-table>

    <v-list>
      <v-list-item v-for="(Kontakt, index) in Datenbank" :key="index"
        >{{ index }}: {{ Kontakt.Nachname }}, {{ Kontakt.Vorname }} -
        {{ Kontakt.Geburtstag }} ({{ Kontakt.id }})</v-list-item
      >
    </v-list>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

const db = firebase.firestore()

export default {
  //Im data-Bereich werden die Formulardaten zum Abspeichern in der Datenbank abgelegt sowie im Datenbank-Array die empfangenen Daten abgelegt
  data: () => ({
    Name: '',
    Vorname: '',
    Datum: '',
    Datenbank: [],
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'Nachname',
        groupable: true
      },
      { text: 'Vorname', value: 'Vorname' },
      { text: 'Geburtstag', value: 'Geburtstag' }
    ]
  }),

  methods: {
    async datenSpeichern() {
      const docRef = db.collection('Kontakte').doc()
      //const docRef = db.collection('Kontakte').doc('alovelace') doc gelöscht, damit ID vergeben wird
      let datum = new Date(this.Datum).toLocaleDateString()
      try {
        await docRef.set({
          Vorname: this.Vorname,
          Nachname: this.Name,
          Geburtstag: datum
        })
      } catch (error) {
        alert(error)
      }
    },
    klickReihe(reihe) {
      alert(reihe.id)
    }
  },

  //Abruf der Firebase-Datenbank beim Aufbau der Webseite als Lifecycle-hook
  mounted: async function() {
    const Kontakte = db.collection('Kontakte')
    const snap = await Kontakte.orderBy('Nachname').get()
    console.log('Hier der Snapshot: ', snap)

    //Hinzufügen der einzelnen Datensätze zum Data-Objekt der vue-Instanz
    snap.forEach(doc => {
      console.log(doc.id, '=>', doc.data())
      //Kontaktobjekt aus den Firebase-Dokumentdaten erstellen
      let kontaktobjekt = doc.data()
      //Hinzufügen eines ID-Feldes
      kontaktobjekt.id = doc.id

      this.Datenbank.push(kontaktobjekt)
    })
  }
}
</script>
