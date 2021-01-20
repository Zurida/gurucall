<template>
    <div class="get-job-item">
        <span>{{item.id + 1}}</span>
        <div class="get-job-item__body">
            <div class="get-job-item__title">
                <p>{{item.title}}</p>
            </div>
            <p class="get-job-item__text">
                {{item.text}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        }
    }
</script>

<style lang="stylus" scoped>
    .get-job-item {
        position relative

        &:not(:last-child):after {
            content ''
            display block
            position absolute
            width 19px
            height 30px
            background-image url("./img/arrow-right.svg")
            background-position center
            background-size contain
            background-repeat no-repeat
            right -20%
            top 50%
            margin-top -15px
            +mob(){
                display none
            }
        }

        span {
            position absolute
            z-index 1
            font-size 72px
            line-height 56px
            color #E0E0E0
            top -21%
            font-weight 800

        }

        &__body {
            background-color #ffffff
            box-shadow $shadow
            padding 28px 27px 28px 32px
            border-radius 10px
            max-width 248px
            position relative
            z-index 2
            min-height 204px
        }

        &__title {
            position relative
            margin-bottom 24px
            font-size 18px
            line-height 28px
            font-weight 700

            &:before {
                content ''
                display block
                position absolute
                width 28px
                height @width
                background-color $color-primary
                border-radius 50%
                left -5%
            }

            p {
                position relative
                z-index 1
            }
        }

        &__text {
            font-size 16px
            line-height 24px
            color #A2A2A2
            font-weight 500
        }
    }
</style>