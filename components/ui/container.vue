<template>
    <div class="ui-container">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "ui-container"
    }
</script>

<style scoped lang="stylus">
    .ui-container {
        width 1167px
        margin 0 auto
        display block
        padding 0 15px
        +desk(){
            max-width 100%
            width 997px
        }
        +mob(){
            width 320px
            padding-left 10px
            padding-right 10px
        }
    }
</style>