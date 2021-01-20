<template>
    <section class="suggest" id="suggest">
        <ui-container>
            <ui-title v-wow="{ 'animation-name': 'fadeInDown','animation-duration': '1s'}">Мы готовы предложить</ui-title>
            <div class="suggest__items">
                <Item v-for="item in items" :item="item" :key="item.id"/>
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
                        title: 'Гарантированный доход',
                        text: 'Лучшие сотрудники <br>call-центра уже в первый год работы достигают уровня зарплаты в 150 000 рублей'
                    },
                    {
                        id: 1,
                        title: 'Регулярные тренинги',
                        text: 'Тренинги по продажам и повышение своих <br>компетенций. Возможность карьерного роста до <br>руководителя'
                    },
                    {
                        id: 2,
                        title: 'Адаптация сотрудника',
                        text: 'Круглосуточная техническая поддержка и бесплатное обучение: все для того, чтобы нашим сотрудникам было комфортно работать'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .suggest {
        padding-top 96px
        padding-bottom 100px
        +mob() {
            padding-top 77px
            padding-bottom 0px
        }

        .ui-title {
            margin-bottom 56px
            +mob() {
                margin-bottom 34px
            }
        }

        &__items {
            max-width 1056px
            display flex
            justify-content space-between
            margin-left auto
            margin-right @margin-left
            +mob() {
                flex-direction column
            }

            & >>> .suggest-item {
                width 30%
                +mob() {
                    width 100%
                    &:not(:last-child) {
                        margin-bottom 17px
                    }
                }
            }
        }
    }
</style>