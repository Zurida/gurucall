<template>
    <h2 class="ui-title">
        <slot/>
    </h2>
</template>

<script>

    export default {
        name: "ui-title",
        props: {
        }
    }
</script>


<style lang="stylus" scoped>
    .ui-title {
        font-size 32px
        line-height 40px
        font-weight 800
        color $color-default
        text-align center
        +mob(){
            text-align left
            font-size 30px
        }
    }
</style>
