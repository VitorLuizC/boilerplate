<template lang="pug">
  main.view-content
    slot
</template>

<style lang="stylus">
  @import '../styles/config.styl'

  .view-content
    margin-top: view-header.height
</style>
