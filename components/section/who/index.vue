<template>
    <section class="who" id="who">
        <ui-container>
            <div class="who__wrapper">
                <div class="who__about">
                    <ui-title v-wow="{ 'animation-name': 'fadeInDown','animation-duration': '1s'}">Кто такие Guru Call</ui-title>
                    <p class="who__text"><strong>Guru Call — call-центр</strong> с безупречной репутацией, объединяющий
                        гуру продаж из России, Казахстана и Украины. Мы знаем о продажах все и готовы предоставить <br>стабильный
                        заработок
                        и свободный график <br>тем, кто будет совершенствоваться вместе с нами. Однако лучше всего о нас
                        расскажут <br>эти цифры.</p>
                </div>
                <div class="who__figures">
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
                    {id: 0, number: '50 000 ₽', text: 'Средняя зарплата оператора call-центра'},
                    {id: 1, number: '3500 +', text: 'Штат сотрудников, работающих удаленно'},
                    {id: 2, number: '24/7', text: 'Круглосуточная техническая поддержка'},
                    {id: 3, number: 'ТОП 3', text: 'Лидеры <br>в своем сегменте'}
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .who {
        padding-top 102px
        padding-bottom 76px
        background-image url("./img/bg.png")
        background-position right center
        background-repeat no-repeat
        background-size contain
        +mob() {
            padding-top 73px
            padding-bottom 0
            background-image none
        }

        &__wrapper {
            display flex
            align-items flex-start
            justify-content space-between
            max-width 984px
            +mob(){
                flex-direction column
            }
        }

        .ui-title {
            margin-bottom 40px
            text-align left
            +mob(){
                max-width 206px
                margin-bottom 11px
            }
        }

        &__about {
            width 426px
            max-width 100%
            color $color-text
            font-weight 500
            font-size 16px
            line-height 24px
            position relative
            +mob(){
                margin-bottom 43px
            }

            &:after {
                content ''
                display block
                position absolute
                width 248px
                height 67px
                background-image url("./img/arrow.png")
                background-size contain
                background-position center
                background-repeat no-repeat
                right 0
                bottom -15%
                +desk() {
                    right 10%
                    bottom -30%
                }
                +mob(){
                    display none
                }
            }

            br {
                +mob(){
                    display none
                }
            }
        }

        &__figures {
            max-width 542px
            display flex
            flex-wrap wrap
            justify-content space-between

            .who-figure {
                &:first-child {
                    & >>> .who-figure__number {
                        &:after {
                            min-width 170px
                        }
                    }

                }
            }
        }

        &-figure {
            &:nth-child(2n){
                +mob(){
                    margin-left auto
                }
            }
        }
    }
</style>