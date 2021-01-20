<template>
    <section class="work" id="work">
        <ui-container>
            <ui-title v-wow="{ 'animation-name': 'fadeInDown','animation-duration': '1s'}">Как мы работаем</ui-title>
            <div class="work__items">
                <Item v-for="item in items" :item="item" :key="item.id"/>
            </div>

            <div class="work__slider">
                <no-ssr>
                    <carousel :paginationEnabled="true" :perPage="1" easing="ease">
                        <slide v-for="slide in items" :key="slide.id" class="main-slide">
                            <Item :item="slide"/>
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
                items: [
                    {
                        id: 0,
                        title: 'Подтверждение заказов',
                        text: 'По покупкам в <br>интернет-магазинах <br>или по оформлению <br>услуг'
                    },
                    {
                        id: 1,
                        title: 'Горячие звонки',
                        text: 'Общение по готовому <br>сценарию и заранее <br>подготовленному <br>скрипту'
                    },
                    {
                        id: 2,
                        title: 'Обзвон постоянных клиентов',
                        text: 'Продвижение новых продуктов и поддержание клиентской базы'
                    },
                    {
                        id: 3,
                        title: 'Консультация по имеющимся офферам',
                        text: 'Раскрытие преимуществ товара и помощь в совершении покупки'
                    },
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .work {
        padding-top 122px
        padding-bottom 62px
        overflow hidden
        +mob() {
            padding-top 80px
            padding-bottom 30px
        }

        .ui-title {
            margin-bottom 56px
        }

        &__items {
            max-width 1136px
            display flex
            justify-content space-between
            margin-left auto
            margin-right @margin-left
            +desk() {
                flex-wrap wrap
                max-width 600px
            }
            +mob() {
                display none
            }

            & >>> .work-item {
                +desk() {
                    margin-bottom 20px
                }
            }
        }

        &__slider {
            display none
            +mob() {
                display block
            }
        }

        & >>> .VueCarousel {
            &-wrapper {
                overflow visible
            }
        }
    }
</style>