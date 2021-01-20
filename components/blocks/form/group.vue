<template>
    <div class="form-group">
        <div class="form-group__title">{{title}}{{required ? '*' : ''}}</div>
        <div class="form-group__body">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            btn: Boolean,
            title: String,
            required: Boolean,
        },

    }
</script>

<style lang="stylus">
    .form-group {
        &__title {
            background-color #F6F6F6
            padding-top 11px
            padding-bottom 13px
            min-height 48px
            font-size 18px
            line-height 24px
            padding-left 97px
            font-weight 700
            +mob(){
                padding-left 10px
                padding-right 10px
            }
        }

        &__body {
            padding-left 97px
            padding-top 24px
            padding-bottom 40px
            +mob(){
                padding-left 10px
                padding-right 10px
            }
        }
    }
</style>