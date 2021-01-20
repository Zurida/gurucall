<template>
    <section class="comments" id="comments">
        <ui-container>
            <ui-title v-wow="{ 'animation-name': 'fadeInDown','animation-duration': '1s'}">Отзывы сотрудников</ui-title>
            <div class="comments__slider">
                <no-ssr>
                    <carousel
                            :paginationEnabled="true"
                            :perPage="1"
                            easing="ease"
                            :centerMode="true"
                            :navigationNextLabel="''"
                            :navigationPrevLabel="''"
                            :navigationEnabled="true"
                            @pageChange="initialLoad = false"
                            :autoplay="true"
                            :autoplayTimeout='3000'
                            :loop="true"
                    >
                        <slide
                                v-for="(item, index) in items"
                                :key="item.id"
                                :class="{ 'VueCarousel-slide-active': index === 0 && initialLoad}">
                            <Item :item="item"/>
                        </slide>
                    </carousel>
                </no-ssr>
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
                initialLoad: true,
                items: [
                    {
                        id: 0,
                        url: require('./img/comment-1.png'),
                        text: 'Две предыдущие работы были просто каторгой: постоянные переработки и необоснованные штрафы. Боялась повторения этой истории, но совершенно напрасно. Работая в этом колл-центре, спокойно продолжаю учебу в институте и получаю достойную зарплату!',
                        name: 'Екатерина Савелова / 4 месяца работы в GC'
                    },
                    {
                        id: 1,
                        url: require('./img/comment-2.png'),
                        text: 'Убедился, что в Guru Call работают настоящие профессионалы! Руководство и наставники всегда подскажут как лучше всего отработать сложные ситуации с клиентом или правильно презентовать новинку. А благодаря тренингам компании я уже вошел в группу ведущих менеджеров по продажам.',
                        name: 'Станислав Котов / 8 месяцев работы в GC'
                    },
                    {
                        id: 2,
                        url: require('./img/comment-3.png'),
                        text: 'Guru Call дает по-настоящему сильный старт для каждого новичка. Огромный плюс работы здесь —  абсолютно реальные, выполнимые задачи и возможность прокачать свои навыки продаж. Всего за полгода работы моя зарплата выросла почти вдвое, а уже через год мне доверили проводить обучение среди новых сотрудников.',
                        name: 'Евгений Даниленко / 1 год 2 мес работы в GC'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .comments {
        overflow-x hidden
        position relative
        z-index 0
        padding-top 100px
        +mob() {
            padding-top 80px
        }

        &:before {
            content ''
            display block
            position absolute
            width 35%
            height 100%
            background-image: linear-gradient(to right, #ffffff, #fff, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
            left 0
            top 0
            bottom 0
            z-index 1
            +mob() {
                display none
            }
        }

        &:after {
            content ''
            display block
            position absolute
            width 35%
            height 100%
            background-image: linear-gradient(to left, #ffffff, #fff, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
            right 0
            top 0
            bottom 0
            z-index 1
            +mob() {
                display none
            }
        }

        .ui-title {
            margin-bottom 56px
            +mob() {
                margin-bottom 40px
            }
        }

        & >>> .VueCarousel {
            max-width 650px
            margin-left auto
            margin-right auto

            &-slide:not(.VueCarousel-slide-active) {
                opacity 0.3
            }

            &-wrapper {
                padding-top 20px
                padding-bottom 20px
                overflow visible
                +mob(){
                    padding-bottom 5px
                }
            }

            &-dot-container {
                margin-top 0 !important
            }

            &-dot {
                &--active {
                    width 8px !important
                    height 8px !important
                }
            }

            &-navigation {
                +mob() {
                    display none
                }

                &-button {
                    width 60px
                    height 60px
                    border-radius 50%
                    border 2px solid $color-primary
                    background-color #ffffff
                    z-index 3
                    outline none
                    right 5%

                    &:after {
                        content ''
                        display block
                        position absolute
                        width 16px
                        height 16px
                        border-right 6px solid #E0E0E0
                        border-bottom 6px solid #E0E0E0
                        border-radius 2px
                        left 50%
                        margin-left -10px
                        top 50%
                        margin-top -8px
                        transform rotate(-45deg)
                        transition border-color 0.3s
                    }

                    &:not(.VueCarousel-navigation--disabled):hover:after {
                        border-color #516986
                    }
                }

                &-prev {
                    left 5%

                    &:after {
                        transform rotate(135deg)
                        margin-left -6px
                    }
                }
            }
        }
    }

</style>