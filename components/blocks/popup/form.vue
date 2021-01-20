<template>
  <div class="popup-call">
    <PopupNotify
        v-if="isSent"
        :error='isError'
        :title='popup.title'
        :subtitle='popup.subtitle'
        :text='popup.text'
        @close="$emit('close')"
    />
    <Form @submit="onSubmit" class="popup-form" v-else>
      <ui-title>Оставь свои данные</ui-title>
      <ui-input placeholder="Имя" type="text" name="name" required/>
      <ui-input placeholder="+7 (" type="tel" name="phone" required/>
      <div class="popup-call__send">
        <ui-btn type="submit">перезвоните мне</ui-btn>
        <ui-checkbox required label="Даю согласие на обработку моих персональных данных"></ui-checkbox>
      </div>
    </Form>

  </div>
</template>

<script>
import PopupNotify from './notify'

export default {
  components: {
    PopupNotify
  },
  data() {
    return {
      isSent: false,
      isError: false,
      popup: {
        title: '',
        subtitle: '',
        text: '',
      }
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>

<style lang="stylus" scoped>
.popup-call {
  .ui-title {
    margin-bottom 40px
    text-align center
  }
}
</style>