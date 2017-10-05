<template>
  <mu-appbar id="my-header">
    <router-link to="/" class="logo">PWA</router-link>

    <mu-icon-button icon="mode_edit" slot="right" to="/hello" />
    <mu-icon-button v-show="!user" icon="account_circle" slot="right" to="/login" />

    <mu-flat-button v-show="user" slot="right" ref="userButton" to="/profile">
      <mu-avatar :src="user && user.photoURL" style="margin:0 10px; width:28px; height:28px" />
    </mu-flat-button>
  </mu-appbar>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    userMenuOpen: false,
    userMenuTrigger: null
  }),
  computed: {
    ...mapState({
      user: 'user'
    })
  },
  watch: {
    user (val) {
      if (val) {
        this.userMenuTrigger = this.$refs.userButton.$el
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="sass">
#my-header
  .logo
    color: white
    text-decoration: none
    padding: 10px
</style>
