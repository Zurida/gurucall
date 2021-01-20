<template>
    <div class="scroll-btn animated fadeIn">
        <a href="#header" v-scroll-to="'#header'" @click="$emit('click')">
            <icon-arrow-right/>
            <p>вверх</p>
        </a>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped>
    .scroll-btn {
        position fixed
        right 40px
        bottom 100px
        z-index 20
        +mob(){
            display none
        }
        a {
            width 52px
            height 52px
            background-color $color-primary
            border-radius 50%
            font-size 10px
            line-height @font-size
            display flex
            justify-content center
            align-items center
            flex-direction column
            transition background-color 0.2s

            &:hover {
                background-color @background-color - 10

                .icon-arrow-right {
                    transform translateY(-13%)
                }
            }

            p {
                text-transform uppercase
                font-weight 500
                margin-top 2px
            }

            & >>> .icon-arrow-right {
                width 12px
                height @width
                position relative
                transition transform 0.2s

                svg {
                    transform rotate(-90deg)

                    path {
                        fill $color-default
                    }
                }
            }
        }
    }
</style>