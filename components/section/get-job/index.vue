<template>
    <section class="get-job">
        <ui-container>
            <ui-title v-wow="{ 'animation-name': 'fadeInDown','animation-duration': '1s'}">Как устроиться работать <span>в Guru Call</span></ui-title>
            <div class="get-job__items">
                <Item v-for="item in items" :key="item.id" :item="item"/>
            </div>
        </ui-container>
    </section>
</template>

<script>
    import Item from './item'

    export default {
        components: {Item},
        data() {
            return {
                items: [
                    {id: 0, title: 'Заполни анкету', text: 'Укажи ответы на вопросы и свои контактные данные'},
                    {id: 1, title: 'Пройди собеседование', text: 'Расскажи нам о своем опыте работы и компетенциях'},
                    {
                        id: 2,
                        title: 'Начни работать',
                        text: 'Твоя первая смена —  уже на 5-7 день после отправления заявки'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .get-job {
        margin-top 70px
        padding-bottom 108px
        +mob() {
            margin-top 36px
            padding-bottom 10px
        }

        .ui-title {
            margin-bottom 104px
            span {
                +mob(){
                    display block
                }
            }
        }

        &__items {
            display flex
            justify-content space-between
            max-width 904px
            margin-left auto
            margin-right auto
            +mob() {
                flex-direction column
            }
        }

        & >>> .get-job-item {
            +mob() {
                &:not(:last-child) {
                    margin-bottom 83px
                }
                &:nth-child(2n) {
                    margin-left auto
                }
            }
        }
    }
</style>