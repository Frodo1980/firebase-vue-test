import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import de from 'vuetify/es5/locale/de'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  lang: {
    locales: { de },
    current: 'de'
  },
  theme: {
    themes: {
      light: {
        primary: '#FFA726',
        secondary: '#FFA000',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        kalender: '#B0BEC5'
      }
    }
  }
})

export default vuetify
