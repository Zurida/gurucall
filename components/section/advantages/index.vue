<template>
    <section class="advantages">
        <ui-container>
            <ui-title v-wow="{ 'animation-name': 'fadeInDown','animation-duration': '1s'}">Преимущества работы <span>в Guru Call</span></ui-title>

            <div class="advantages__wrapper">
                <div class="advantages__fill">
                    <div class="advantages__img"/>
                    <ui-btn v-scroll-to="'#application'">Заполнить анкету</ui-btn>
                </div>
                <div class="advantages__items">
                    <Item v-for="item in items" :item="item" :key="item.id"/>
                </div>
            </div>
        </ui-container>
    </section>
</template>

<script>
    import Item from './item'

    export default {
        components: {
            Item
        },
        data() {
            return {
                items: [
                    {id: 0, title: 'Удобный график работы'},
                    {id: 1, title: 'Работа из любой <br>точки мира'},
                    {id: 2, title: 'Официальное трудоустройство'},
                    {id: 3, title: 'Своевременные выплаты'}
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .advantages {
        padding-top 130px
        padding-bottom 50px
        background-image url("./img/bg.png")
        background-position left center
        background-repeat no-repeat
        background-size contain
        +desk() {
            background-image none
            padding-top 23px
        }
        +mob() {
            padding-bottom 0
            overflow hidden
        }

        &__wrapper {
            display flex
            +desk() {
                flex-direction column
                align-items center
                padding-bottom 50px
            }
            +mob() {
                align-items flex-start
                padding-bottom 10px
            }
        }

        .ui-container {
            +desk() {
                position relative
            }
        }

        .ui-title {
            margin-bottom 56px

            span {
                +mob() {
                    display block
                }
            }
            +mob() {
                margin-bottom 8px
            }
        }

        &__fill {
            margin-right 96px
            text-align center
            +desk() {
                margin-right 0
            }

            .ui-btn {
                margin-top 16px
                +desk() {
                    position absolute
                    bottom -20px
                    left 50%
                    transform translateX(-50%)
                }
                +mob() {
                    display none
                }
            }
        }

        &__img {
            background-image url("./img/girl.png")
            background-size contain
            background-position center
            background-repeat no-repeat
            width 504px
            height 400px
            +mob() {
                width 327px
                height 260px
                position relative
                right -20px
                margin-bottom 25px
            }
        }

        &__items {
            display flex
            justify-content space-between
            flex-wrap wrap
            max-width 512px
        }

        &-item {
            &:nth-child(2n) {
                margin-left auto
            }
        }
    }
</style>