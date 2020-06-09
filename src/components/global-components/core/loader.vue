 <template>
    <div class="text-center" v-if="showLoader">
        <v-overlay :value="true">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
  </div>
</template>
<script>
  export default {
    data: () => ({
        showLoader: false
    }),
    methods: {
        show (v) {
        this.showLoader = v
        }
    }
  }
</script>