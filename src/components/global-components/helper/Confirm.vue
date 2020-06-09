<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="450px"
    @keydown.esc="cancel"
  >
    <custom-dialog>
      <template slot="title">{{ title }}</template>
      {{ message }}
      <template slot="actions">
        <v-btn
          color="primary"
          flat
          @click.native="cancel"
        >
          No
        </v-btn>
        <v-btn
          color="#8a8da4"
          dark
          @click.native="agree"
        >
          Yes
        </v-btn>
      </template>
    </custom-dialog>
  </v-dialog>
</template>

<script>
export default {
  name: 'Confirm',
  data () {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      message: null,
      title: null
    }
  },
  methods: {
    open (title, message) {
      this.dialog = true
      this.title = title
      this.message = message

      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },

    agree () {
      this.resolve(true)
      this.dialog = false
    },

    cancel () {
      this.reject(true)
      this.dialog = false
    }
  }
}
</script>
