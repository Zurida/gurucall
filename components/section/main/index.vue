<template>
    <section class="main">
        <ui-container>
            <h1 class="main__title main__title--mob animated">Работай <br>в call-центре премиум-уровня удаленно</h1>
            <div class="main__wrapper">
                <div class="main__about">
                    <h1 class="main__title main__title--desk" v-wow="{ 'animation-name': 'fadeInDown','animation-duration': '1s'}">Работай в call-центре премиум-уровня удаленно</h1>
                    <ul class="main__list">
                        <li v-for="item in items" :key="item.id">{{item.text}}</li>
                    </ul>
                    <ui-btn v-scroll-to="'#application'">Заполнить анкету</ui-btn>
                </div>
                <div class="main__slider">
                    <no-ssr>
                        <carousel :paginationEnabled="true" :perPage="1" :autoplay="true" easing="ease" :loop="true">

                            <slide v-for="slide in slides" :key="slide.id" class="main-slide">
                                <div class="main-slide__img" :style="{backgroundImage:`url(${slide.img})`}"/>
                            </slide>
                        </carousel>
                    </no-ssr>
                </div>
            </div>
        </ui-container>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {id: 0, text: 'Доход от 50 000 рублей и система привилегий'},
                    {id: 1, text: 'График и место работы на выбор'},
                    {id: 2, text: 'Только «горячая» клиентская база'}
                ],
                slides: [
                    {id: 0, img: require('./img/slide-1.png')},
                    {id: 1, img: require('./img/slide-2.png')},
                    {id: 2, img: require('./img/slide-3.png')}
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .main {
        padding-top 183px
        padding-bottom 130px
        +deskLG() {
            padding-top 150px
            padding-bottom 80px
        }
        +mob() {
            padding-top 92px
            padding-bottom 0
        }

        &__wrapper {
            display flex
            align-items center
            +deskLG() {
                flex-direction column-reverse
            }
        }

        &__title {
            font-size 40px
            line-height 48px
            margin-bottom 24px
            max-width 628px
            font-weight 800

            &--desk {
                +deskLG() {
                    display none
                }
            }

            &--mob {
                display none
                +deskLG() {
                    display block
                    margin-left auto
                    margin-right auto
                }
                +mob() {
                    font-size 30px
                    line-height 40px
                    margin-bottom 24px
                }
            }
        }

        &__about {
            min-width 628px
            +mob(){
                min-width auto
            }
        }

        &__list {
            li {
                position relative
                padding-left 14px
                font-size 18px
                line-height 28px
                font-weight 700
                color $color-text
                +mob(){
                    max-width 260px
                }

                & + li {
                    margin-top 8px
                }

                &:before {
                    content ''
                    display block
                    position absolute
                    width 8px
                    height @width
                    top 50%
                    left 0
                    margin-top -(@height / 2)
                    border-radius 50%
                    background-color $color-primary
                    +mob(){
                        top 8px
                        margin-top 0
                    }
                }
            }
        }

        .ui-btn {
            margin-top 56px
            +mob(){
                margin-top 34px
            }
        }

        &__slider {
            margin-top 20px
            width 559px
            height 424px
            +deskLG() {
                margin-top 0
                margin-bottom 100px
            }
            +mob() {
                width 290px
                height 248px
                margin-bottom 60px
            }
        }

        &-slide {
            &__img {
                width 559px
                height 424px
                background-size cover
                background-position center
                background-repeat no-repeat
                +mob() {
                    width 290px
                    height 216px
                    margin-left auto
                    margin-right auto
                }
            }
        }
    }
</style>