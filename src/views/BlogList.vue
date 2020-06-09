<template>
  <v-container>
    <v-row dense>
      <v-col cols="3" v-for="(item, index) in blogList" :key="index">
        <v-card max-width="344">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ item.title | makeUppercase }}</v-list-item-title>
              <v-list-item-subtitle>by {{ userName }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-img :src="item.image" height="194"></v-img>
          <v-card-text>{{ item.description | contentSnippet }}</v-card-text>
          <v-card-actions>
            <v-btn text="" color="deep-purple accent-4">Read</v-btn>
            <v-btn text="" color="deep-purple accent-4">Bookmark</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import filtersMixins from '../mixins/filters'
export default {
  mixins: [filtersMixins],
  name: "UserBlogs",
  data() {
    return {
      userId: "",
      userName: "",
      blogList: []
    };
  },
  mounted() {
    this.userId = this.$route.params.id;
    this.userName = this.$route.query.userName;
    this.getUserBlogs();
  },
  methods: {
    getUserBlogs() {
      this.$root.$loader(true)
      this.$http.get( `/v1/users/${ this.userId }/blogs`)
      .then((value) => {
        this.blogList = value.data; 
      })
      .finally(() => {
        this.$root.$loader(false)
      })
    }
  },
};
</script>
