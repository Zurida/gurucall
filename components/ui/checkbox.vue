<template>
    <div class="ui-checkbox">
        <label class="ui-checkbox__label" v-if="label">
            <input
                    type="checkbox"
                    class="ui-checkbox__field"
                    :value="value"
                    :name="name"
                    :required="required"
                    v-model="model"
            />
            <span class="ui-checkbox__text">{{label}}</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "ui-checkbox",
        props: {
            placeholder: {
                type: String,
            },
            label: String,
            value: [String, Array, Number],
            required: Boolean,
            name: String,
            checked: Boolean
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

<style lang="stylus" scoped>
    .ui-checkbox {
        $parent = selector()

        &__label {
            display flex
            align-items center
            justify-content center
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
            color #A1A1A1
            font-size 12px
            line-height 20px
            font-weight 500
            +mob() {
                font-size 14px
                line-height @font-size
                padding-left 35px
            }
        }

        &__text:before {
            content ''
            position absolute
            top 3px
            left 0
            width 16px
            height 16px
            background-color $color-primary
            border-radius 2px
        }

        &__text:after {
            content ''
            display block
            position: absolute
            top -5px
            left 3px
            width 10px
            height 7px
            border-width 3px
            border-color transparent
            border-left-style solid
            border-bottom-style solid
            transform rotate(-45deg)
            border-radius 2px
            transition 0.2s
            top -20
        }

        & input:checked + {$parent}__text:after {
            border-color $color-default
            top 6px
        }
    }
</style>
