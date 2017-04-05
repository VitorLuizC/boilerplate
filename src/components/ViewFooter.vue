<template lang="pug">
  footer.view-footer
    p {{ author }} &copy; {{ year }}
</template>

<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear(),
        link: 'https://github.com/VitorLuizC/',
        author: 'Vitor Luiz Cavalcanti'
      }
    }
  }
</script>
