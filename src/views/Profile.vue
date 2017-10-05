<template>
  <div>
    <mu-card>
      <mu-card-header :title="user.displayName" :subTitle="user.email">
        <mu-avatar :src="user.photoURL" slot="avatar" />
      </mu-card-header>
      <mu-card-actions>
        <mu-raised-button secondary fullWidth label="Sign out" to="/logout" />
      </mu-card-actions>
    </mu-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="scss">

</style>
