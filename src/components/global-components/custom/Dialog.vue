<template>
  <v-card>
    <v-card-title
      class="headline grey lighten-2"
      primary-title
    >
      <slot name="title" />
    </v-card-title>

    <v-card-text>
      <slot />
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-spacer />
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>
