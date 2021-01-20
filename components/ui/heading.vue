<template>
    <div class="ui-heading" :class="classes">
        <slot/>
    </div>
</template>

<script>

    export default {
        name: "ui-heading",
        props: {
            dark: Boolean,
            light: Boolean
        },
        computed: {
            classes() {
                const {dark, light} = this;
                return {
                    'ui-heading--dark': dark,
                    'ui-heading--light': light
                }
            }
        }
    }
</script>


<style lang="stylus" scoped>
    .ui-heading {
        font-family $font-black
        text-align center
        text-transform uppercase
        text-shadow 2px 7px 2px #203c65, 4px 9px 1px #000, 4px 9px 4px #000

        &--dark {
            font-size 76px
            color $color-primary
            line-height @font-size + 4
            +mob(){
                font-size 32px
                line-height @font-size + 4
            }
        }

        &--light {
            color #fff
            font-size 90px
            line-height @font-size + 4
            +mob(){
                font-size 42px
                line-height @font-size + 4
            }
        }
    }
</style>
