<template lang="pug">
  .site
    nuxt(:nuxt-child-key="$route.fullPath")
</template>
<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  export default {
  }
</script>
<style lang="stylus" scoped>
</style>