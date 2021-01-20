<template>
    <component :is="tag"
               :to="to"
               :href="href"
               class="ui-btn"
               :class="classes"
               @click="$emit('click')"
               :disabled="disabled"
               :type="type"
    >
        <icon-phone v-if="call"></icon-phone>
        <slot/>
    </component>
</template>

<script>

    export default {
        name: "ui-btn",
        computed: {
            tag() {
                const {to, href} = this;
                if (to) return 'nuxt-link';
                if (href) return 'a'
                return 'button'
            },
            classes() {
                const {disabled, call} = this;
                return {
                    'is-disabled': disabled,
                    'is-call': call
                }
            }
        },
        props: {
            to: String,
            disabled: Boolean,
            type: String,
            href: String,
            call: Boolean
        }
    }
</script>


<style lang="stylus" scoped>
    .ui-btn {
        $parent = selector()
        display inline-block
        padding 16px 32px
        margin-bottom 0
        font-family $font-menu
        font-weight 700
        font-size 1rem
        line-height 1.2rem
        letter-spacing 0.06em
        text-align center
        vertical-align middle
        touch-action manipulation
        cursor pointer
        user-select none
        border-radius 100px
        text-decoration none
        transition background .2s linear, color .4s linear, box-shadow .2s linear
        background-color #F8CE30
        background-image linear-gradient(286.79deg, #F8CE30 0.85%, #FEE071 66.23%)
        color #333333
        box-shadow 0px 4px 32px #FFDD93
        text-transform uppercase
        +mob(){
            display block
            width 100%
            max-width 290px
            box-shadow 0px 4px 12px #FFDD93
        }

        &:hover {
            background #f8ce30
        }

        &:focus, &:active {
            box-shadow 0px 4px 5px rgba(14, 55, 103, 0.12)
            outline none
        }

        &.is-disabled {
            background #efefef
            color #bebebe
            box-shadow none

            &:hover {
                background #efefef
            }
        }

        &.is-call {
            height 40px
            padding-left 4px
            padding-right 14px
            display flex
            align-items center
            justify-content center
            font-size 14px
            line-height 24px
            box-shadow 0px 4px 16px rgba(14, 55, 103, 0.12)
            text-transform lowercase
            font-weight 500
            +mob() {
                padding-top 0
                padding-bottom 0
                font-size 11px
                height 32px

            }
        }

        .icon-phone {
            width 32px
            height @width
            padding 8px
            border-radius 50%
            background-color #ffffff
            margin-right 8px
            +mob() {
                width 25px
                height @width
                padding 5px
            }

        }
    }


</style>
