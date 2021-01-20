<template>
    <div class="ui-radio">
        <label class="ui-radio__label" v-if="label">
            <input
                    type="radio"
                    class="ui-radio__field"
                    :value="value"
                    :name="name"
                    :required="required"
                    v-model="model"
            />
            <span class="ui-radio__text">{{label}}</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "ui-radio",
        props: {
            placeholder: {
                type: String,
            },
            label: String,
            value: [String, Array, Number],
            required: Boolean,
            name: String,
            checked: String
        },
        model: {
            prop: 'checked',
            event: 'change'
        },
        computed: {
            model: {
                get() {
                    return this.checked;
                },
                set(val) {
                    this.$emit('change', val);
                },
            },
        },
    }
</script>

<style lang="stylus">
    .ui-radio {
        $parent = selector()

        & + & {
            margin-top 8px
        }

        &__field {
            color $color-default
            padding-left 14px
            padding-right @padding-left
            border 2px solid #F6F6F6
            border-radius 5px
            width 22px
            height 58px
            transition border-color .4s ease-in-out
            font-size 14px
            line-height 20px
            background-color $color-white
            padding-top 14px
        }

        &__label {
            font-size 16px
            line-height 24px
            display flex
            align-items center
        }

        & input {
            position absolute
            z-index -1
            opacity 0
            margin 10px 0 0 20px
        }

        &__text {
            display inline-block
            position relative
            padding 0 0 0 30px
            cursor pointer
            font-size 16px
            line-height 24px
            color #A2A2A2
            transition color 0.2s
        }

        &__text:before {
            content ''
            position absolute
            left 0
            top 2px
            width 20px
            height 20px
            border-radius 50%
            border 2px solid $color-primary
        }

        &__text:after {
            content ''
            display block
            position absolute
            top 7px
            left 5px
            width 10px
            height 10px
            border-radius 50%
            transition 0.2s
            opacity 0
            background-color transparent

        }

        & input:checked + {$parent}__text {
            color #333333
            font-weight 700
            &:after {
                background-color $color-primary
                opacity 1
            }
        }
    }
</style>
