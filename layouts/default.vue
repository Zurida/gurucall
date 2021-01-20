<template>
  <div class="page">

    <main class="animated fadeIn">
      <div class="page__wrapper">
        <nuxt/>
      </div>
    </main>

    <portal-target name="application-popup"></portal-target>
    <portal-target name="popup-call"></portal-target>

  </div>
</template>


<script>


export default {
  name: 'Default',
}
</script>

<style lang="stylus" scoped>
.page {
  background-color $color-white

  .vue-portal-target {
    position relative
    z-index 50
  }
}
</style>
