<template>
  <b-button pill variant="success" v-if="user===undefined || user.isAnonymous===true" href="/api/auth/authorize_google">Login</b-button>
  <b-button pill variant="danger"  v-else @click="logout">Logout - {{ user.nickname }}</b-button>
</template>

<script>
import {get} from "@/backend";

export default {
  name: "LoginItem",
  data() {
    return {
      user: undefined,
    }
  },
  mounted() {
    this.loadCurrentUser();
  },
  methods: {
    loadCurrentUser() {
      get('auth/user').then(d => this.user = d);
    },
    logout() {
      get('auth/logout').then(() => this.loadCurrentUser());
    },
  }
}
</script>

<style scoped>

</style>
