import Vue from 'vue'
import VueI18n from 'vue-i18n'
import i18nData from '../locales/i18nData'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en', // set default locale
  messages: i18nData,
})