<template>
    <div class="ui-input" :class="classes">
        <div class="ui-input__container">
            <label class="ui-input__label" v-if="label">{{label}}</label>
            <component
                    :is="tag"
                    class="ui-input__field"
                    :placeholder="placeholder"
                    :value="value"
                    :name="name"
                    @input="$emit('input', $event.target.value)"
                    @blur="$emit('blur')"
                    @focus="$emit('focus')"
                    @keypress="onKeypress($event)"
                    ref="input"
                    :type="type"
                    :required="required"
                    :minlength="minlength"
                    :maxlength="maxlength"
            />
        </div>
        <div class="error-message animated fadeIn" v-if="error" v-text="error"/>
    </div>
</template>

<script>
    export default {
        name: "ui-input",
        props: {
            placeholder: {
                type: String,
            },
            label: String,
            value: String,
            textarea: Boolean,
            required: Boolean,
            type: String,
            name: String,
            minlength: [String, Number],
            maxlength: [String, Number],
            error: String
        },
        computed: {
            tag() {
                return this.textarea ? 'textarea' : 'input'
            },
            classes() {
                const {error, textarea} = this;
                return {
                    'ui-input--error': error,
                    'ui-input--textarea': textarea,
                }
            }
        },
        methods: {
            onKeypress(event) {
                const {isPhone} = this;
                if (isPhone && !/\d/.test(event.key) && (event.key !== "+")) {
                    return event.preventDefault();
                }
            }
        }
    }
</script>

<style lang="stylus">
    .ui-input {

        $parent = selector()

        &__container {
            position relative
        }

        &--textarea {
            & {$parent} {
                &__field {
                    height 80px
                }
            }
        }

        &--error {
            .ui-input__field {
                border 2px solid $color-error
            }

            .ui-input__field {
                &:focus {
                    border 2px solid $color-error
                }
            }
        }

        &__field {
            appearance none
            color $color-default
            min-height 40px
            transition border-color .4s ease-in-out
            font-size 16px
            line-height 24px
            background-color $color-white
            width 327px
            max-width 100%
            margin-bottom 8px
            border 1px solid #E2E2E2
            border-radius 5px
            padding 8px 16px

            &::placeholder {
                color #A2A2A2
                transition color 0.2s
                font-size 16px
                line-height 24px
            }

            &:hover, &:focus {
                outline none
            }

            &:focus {
                border 1px solid $color-primary

                &::placeholder {
                    color #dedede
                }
            }

            &:-internal-autofill-selected {
                -webkit-box-shadow: inset 0 0 0 50px #fff;
                -webkit-text-fill-color: #000;
            }


            textarea& {
                padding-top 9px
                line-height 24px
                resize vertical
            }
        }

        &__label {
            font-size 10px
            line-height 21px
            font-family $font-bold
            position absolute
            color #828C9D
            left 14px
            top -8px
            text-transform uppercase
            background-color $color-white
            padding 0 3px
        }
    }
</style>
