<template>
    <section class="fill">
        <ui-container>
            <Ready/>
        </ui-container>
    </section>
</template>

<script>
    import Ready from '@/components/blocks/ready'

    export default {
        components: {
            Ready
        }
    }
</script>

<style lang="stylus" scoped>
    .fill {
        padding-top 140px
        background-image url("./img/bg.png")
        background-position center
        background-repeat no-repeat
        background-size contain
        padding-bottom 360px
        margin-top -80px
        +mob() {
            padding-top 30px
            padding-bottom 180px
            margin-top -30px
            background-size contain
            background-position top center
        }
        @media screen and (max-width 480px) {
            background-size cover
        }
    }

    .ready {
        margin-top 145px
        position relative
        +mob() {
            margin-top 60px
        }

        &:after {
            bottom -234px
            +mob() {
                display block
                bottom -100px
            }
        }
    }
</style>