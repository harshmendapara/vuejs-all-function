<template>
  <v-container>
    <v-layout
      align-center
      justify-center
      row
      fill-height
    >
      <v-flex
        xs12
        sm8
        md5>
        <v-form
          autocomplete="off"
          @submit.prevent="authenticate"
        >
            <v-text-field
              v-model="userData.username"
              append-icon="mdi-email"
              :label="$t('email')"
              name="E-mail"
            />
            <v-text-field
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              v-model="userData.password"
              :label="$t('password')"
              name="Password"
              @click:append="showPassword = !showPassword"
            />
            <div class="text-lg-right">
              <v-btn
                :loading="loading"
                color="fhdark"
                type="submit"
              >
                {{ $t('logIn') }}
              </v-btn>
            </div>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      userData: {
        username: '',
        password: ''
      },
      loading: false,
      showPassword: false,
    }
  },
  computed: {
    ...mapGetters('userauth', {
      userLoggedIn: 'userLoggedIn',
      loginInfo: 'loginInfo'
    })
  },
  watch:{
    loginInfo(v){
      this.userData = v
    }
  },
  methods: {
    ...mapActions('userauth', ['setUser']),

    authenticate () {
      this.loading = true
      setTimeout(()=>{
        if(this.userData.username == this.loginInfo.username && this.userData.password == this.loginInfo.password){
          const data = {
            access_token: 'test123412323'
          }
          this.setUser(data)
          this.$router.push('/')
          this.loading = false
        }
      }, 2500)
    }
  }
}
</script>
