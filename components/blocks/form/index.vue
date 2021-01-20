<template>
    <form class="form" @submit.prevent="$emit('submit')">

        <div class="form__body">
            <slot/>
        </div>

        <div class="form__bottom" v-if="$slots.bottom">
            <slot name="bottom"/>
        </div>

    </form>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus">
    .form {
        max-width 944px
        margin-left auto
        margin-right auto
        background-color #ffffff
        box-shadow 0px 4px 20px #CDCDCD
        border-radius 20px
        padding-bottom 61px

        & .form-item {
            font-size 14px
            line-height 1.2rem
            letter-spacing -0.02em

            & + .form-item {
                margin-top 20px
            }

            & >>> a {
                font-size 14px
            }

            &.is-btn {
                margin-top 30px

                +mob() {
                    text-align center
                }
            }

        }
    }
</style>