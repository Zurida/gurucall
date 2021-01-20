<template>
    <section class="candidate" id="candidate">
        <ui-container>
            <div class="candidate__wrapper">
                <div class="candidate__about">
                    <ui-title>Ты подходишь нам, если:</ui-title>
                    <ul class="candidate__list">
                        <li v-for="item in items" :key="item.id" v-wow="{ 'animation-name': 'fadeInDown','animation-duration': '1s'}"><span class="checkmark"/>{{item.text}}</li>
                    </ul>
                </div>
                <div class="candidate__img"></div>
            </div>
            <Ready/>
        </ui-container>
    </section>
</template>

<script>
    import Ready from '@/components/blocks/ready'

    export default {
        components: {
            Ready
        },
        data() {
            return {
                items: [
                    {id: 0, text: 'Твой возраст от 18 до 45 лет'},
                    {id: 1, text: 'Ты не просто консультируешь, а активно и эффективно продаешь'},
                    {
                        id: 2,
                        text: 'Обладаешь коммуникабельностью, умеешь быть убедительным и всегда внимателен к деталям'
                    },
                    {id: 3, text: 'Знаешь, что такое пунктуальность, и начинаешь работу вовремя'},
                    {id: 4, text: 'Качество работы — твой личный ключ к достижению цели'},
                    {id: 5, text: 'Готов научиться новым секретам успешных продаж и повышать свою квалификацию'},
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .candidate {
        background-image url("./img/bg.png")
        background-position right center
        background-repeat no-repeat
        background-size contain
        padding-top 85px
        padding-bottom 134px
        +mob(){
            padding-top 77px
            padding-bottom 20px
            background-image none
        }

        &__wrapper {
            display flex
            align-items center
            margin-bottom 90px
            +mob(){
                margin-bottom 45px
            }
        }

        .ui-title {
            margin-bottom 55px
            text-align left
            +mob(){
                margin-bottom 41px
            }
        }

        &__list {
            max-width 472px
            margin-right 56px
            +mob(){
                max-width 100%
                margin-right 0
            }

            li {
                font-size 16px
                line-height 24px
                margin-bottom 24px
                position relative
                display flex
                font-weight 500
            }

            .checkmark {
                display block
                background-color $color-primary
                width 20px
                height @width
                border-radius 50%
                flex-shrink 0
                margin-right 10px
                position relative
                top 2px

                &:before {
                    content ''
                    display block
                    position absolute
                    width 6px
                    height 9px
                    border-right 2px solid $color-default
                    border-bottom 2px solid $color-default
                    border-radius 2px
                    transform rotate(45deg)
                    left 50%
                    top 50%
                    margin-left -(@width / 2)
                    margin-top -6px
                }
            }
        }

        &__img {
            width 520px
            height 384px
            background-image url("./img/operator.png")
            background-size contain
            background-position center
            background-repeat no-repeat
            +mob(){
                display none
            }
        }
    }
</style>