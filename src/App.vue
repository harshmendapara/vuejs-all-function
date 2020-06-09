<template>
 <v-app>
    <v-app-bar app v-if="userLoggedIn">
      <v-toolbar-title class="headline text-uppercase" @click="$router.push('/')">
        <span>{{ $t('title') }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <select v-model="locale">
        <option value="en">English</option>
        <option value="jp">Japanese</option>
      </select>
      <router-link to="/">
        <v-btn text @submit.prevent>
          <span class="mr-2">{{ $t('home') }}</span>
        </v-btn>
        <v-btn text @click="logout">
          <span class="mr-2">{{ $t('logout') }}</span>
        </v-btn>
      </router-link>
    </v-app-bar>
    <core-loader ref="loader" />
    <helper-confirm ref="confirm"/>    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters('userauth', {
      userLoggedIn: 'userLoggedIn'
    })
  },
  data () {
    return { locale: 'en' }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  mounted(){
    this.$root.$confirm = this.$refs.confirm.open
    this.$root.$loader = this.$refs.loader.show
  },
  methods: {
    ...mapActions('userauth', ['resetUser']),
    logout(){
      let title = 'Logout?'
      let msg = 'Are you sure, you want to logout?'
      this.$root.$confirm(title, msg)
        .then(confirmed => {
          if(confirmed) {
            this.resetUser()
            this.$router.push('/login')
          }
        }).catch(() => {})
    }
  }
}
</script>
