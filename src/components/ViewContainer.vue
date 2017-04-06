<template lang="pug">
  .view-container
    view-header(v-if="!hideHeader")
    view-content
      slot
    view-footer(v-if="!hideFooter")
</template>

<script>
  import ViewHeader from './ViewHeader.vue'
  import ViewFooter from './ViewFooter.vue'
  import ViewContent from './ViewContent.vue'

  export default {
    components: { ViewHeader, ViewContent, ViewFooter },
    props: {
      hideHeader: {
        type: Boolean,
        default: false
      },
      hideFooter: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">
  .view-container
    box-sizing: border-box
    height: 100%
</style>
