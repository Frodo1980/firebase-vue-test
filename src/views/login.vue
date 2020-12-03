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
export default {
  data: () => ({
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
    password: 'Password',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: password => (password == this.password ? true : false)
    }
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>
