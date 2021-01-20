<template>
    <div class="ui-overlay" @click="$emit('close')"></div>
</template>

<script>
    export default {
        name: "ui-overlay"
    }
</script>

<style lang="stylus" scoped>
    .ui-overlay {
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        z-index 99
    }

</style>