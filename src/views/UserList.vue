<template>
  <v-container>
    <v-card>
      <v-card-title>{{ $t('userList') }}
        <v-spacer></v-spacer>
        <search
          :label="$t('search')"
          :placeholder="$t('search')"
          @input="searchData"
        />
      </v-card-title>
      <v-data-table
        :items="userList"
        item-key="id"
        :search="search"
        :headers="headers"
        @click="openDetail"
      >
        <template v-slot:item.avatar="{ item }">
          <router-link :to="`blog/${item.id}?userName=${item.name}`">
            <img :src="item.avatar" height="50%" class="eb-scale">
          </router-link>
        </template>
        <template v-slot:item.name="{ item }">
          <router-link :to="`blog/${item.id}?userName=${item.name}`">
            <span>{{ item.name }}</span>
          </router-link>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      text: "",
      userList: [],
      headers: [
        {
          text: "avatar",
          value: "avatar"
        },
        {
          text: "id",
          value: "id"
        },
        {
          text: "name",
          value: "name"
        },
        {
          text: "phone",
          value: "phone"
        },
        {
          text: "country",
          value: "country"
        },
        {
          text: "state",
          value: "state"
        },
        {
          text: "city",
          value: "city"
        },
        {
          text: "pincode",
          value: "pincode"
        },
        {
          text: "address",
          value: "address"
        }
      ],
      search: ""
    };
  },
  methods: {
    searchData(v){
      this.search = v
    },
    async getUserList() {
      this.$root.$loader(true)
      const result = await this.$http.get("/v1/users");
      this.userList = result.data;
      this.$root.$loader(false)
    },
    openDetail(data) {
      this.text = data;
      this.$router.push({
        name: "blog",
        param: {
          id: data.id
        }
      });
    }
  },
  mounted() {
    this.getUserList();
  }
};
</script>

<style scoped>
.eb-scale:hover {
  transform: scale(1.5);
  transition: 0.5s;
}
</style>
