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
      <input type="hidden" name="email" placeholder="Email">
      <select name="country" style="display:none">
        <option value="RU">ru</option>
        <option value="UA">ua</option>
        <option value="BY">by</option>
        <option value="KZ">kz</option>
      </select>
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
    onSubmit() {

      this.isSent = true
      var $form = $('.popup-form');
      var values = {};

      this.popup = {
        title: 'Спасибо!',
        subtitle: 'Ваша заявка принята.',
        text: 'Наш мененджер свяжется с вами в ближайшее время.'
      }

      $form.leadprofit({hash: "47435d58-aea5-4866-91a8-dc381f6ac031"})
          .leadprofitSubmit({
            successCallback: function (result) {
              $.each($form.serializeArray(), function (i, field) {
                values[field.name] = field.value;
              });
            },
            // errorCallback: function () {
            //   this.isError = true;
            //   this.popup = {
            //     title: 'Не получилось!',
            //     subtitle: 'Ваша заявка не отправлена.',
            //     text: 'Попробуйте отправить заявку еще раз через несколько минут.'
            //   }
            // }
          })
    }
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