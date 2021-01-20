<template>
  <section class="application" id="application">

    <ui-container>
      <ui-title v-wow="{ 'animation-name': 'flipInX','animation-duration': '1s'}">Заполни анкету</ui-title>
      <p class="application__subtitle">Это займет не более 5 минут и позволит узнать тебя получше. <br>Мы ознакомимся
        с анкетой, подберем удобные условия работы и свяжемся с тобой.
        <span class="application__disclaimer">* Все поля обязательны для заполнения</span>
      </p>
      <Form @submit="onSubmit" id="application-form">
        <FormGroup title="1. ФИО">
          <input type="hidden" name="name">
          <select class="select" name="id_country" style="display: none">
            <option value="RU">Россия</option>
            <option value="UA">Украина</option>
            <option value="KZ">Казахстан</option>
            <option value="BY">Белоруссия</option>
            <option value="00">Другое</option>
          </select>

          <ui-input
              placeholder="Фамилия"
              name="staff_f"
              type="text"
              v-model="fields.staff_f"
              minlength='2'
              required
          />
          <ui-input
              placeholder="Имя"
              name="staff_i"
              type="text"
              minlength='2'
              v-model="fields.staff_i"
              required
          />
          <ui-input
              placeholder="Отчество"
              type="text"
              name="staff_o"
              minlength='2'
              v-model="fields.staff_o"
              required
          />
        </FormGroup>

        <FormGroup title="2. Пол" class="form-group--sex">
          <ui-radio label="женский" name="sex" value="F" v-model="fields.sex" required/>
          <ui-radio label="мужской" name="sex" value="M" v-model="fields.sex" required/>
        </FormGroup>

        <FormGroup title="3. Возраст">
          <ui-select name="day_birthday"
                     v-model="fields.day_birthday"
                     emptyText="Число"
                     required
          >
            <option v-for="(option, index) in 31" :key="index" :value="option">
              {{ option }}
            </option>
          </ui-select>
          <ui-select name="month_birthday"
                     v-model="fields.month_birthday"
                     emptyText="Месяц"
                     required
          >
            <option v-for="(option, index) in options.months" :key="index" :value="index + 1">
              {{ option }}
            </option>
          </ui-select>
          <ui-select name="year_birthday"
                     v-model="fields.year_birthday"
                     emptyText="Год"
                     required
          >
            <option v-for="(option, index) in range(1954, 2004)" :key="index" :value="option">
              {{ option }}
            </option>
          </ui-select>
        </FormGroup>

        <FormGroup title="4. Контактная информация">
          <ui-input
              placeholder="Телефон"
              type="tel"
              name="phone"
              v-model="fields.phone"
              minlength='10'
              required
          />
          <ui-input
              placeholder="Скайп"
              type="text"
              name="skype"
              v-model="fields.skype"
              required
          />
          <ui-input
              placeholder="E-mail"
              type="email"
              name="email"
              v-model="fields.email"
              required
          />
        </FormGroup>

        <FormGroup title="5. Есть ли у тебя опыт:">
          <ui-radio label="в продажах по телефону" name="question_2912" value="10570" v-model="fields.question_2912"
                    required/>
          <ui-radio label="в любом другом виде продаж" name="question_2912" value="10571"
                    v-model="fields.question_2912" required/>
          <ui-radio label="нет опыта в продажах и общения с клиентами" name="question_2912"
                    value="10572" v-model="fields.question_2912" required/>
        </FormGroup>

        <FormGroup title="6. Имеет ли для тебя значение, какие товары продавать?">
          <ui-radio label="да" name="question_2913" value="10573" v-model="fields.question_2913" required/>
          <ui-radio label="да, в продажах я в первую очередь обращаю внимание на товар" name="question_2913"
                    value="10574" v-model="fields.question_2913" required/>
          <ui-radio label="нет, мне все равно что продавать, если это законно и приносит деньги"
                    name="question_2913"
                    value="10575" v-model="fields.question_2913" required/>
        </FormGroup>

        <FormGroup title="7. Ты хочешь зарабатывать, продавая наши товары нашим клиентам?">
          <p class="form-group__text">Женщины покупают средства для похудения, красоты и здоровья, а мужчины —
            средства для повышения
            потенции. Мы продаем уникальные товары для садоводов и домашнего хозяйства, амулеты для оберега
            и многое другое.</p>
          <ui-radio label="да" name="question_2914" value="10576" v-model="fields.question_2914" required/>
          <ui-radio label="нет" name="question_2914" value="10577" v-model="fields.question_2914" required/>
        </FormGroup>

        <FormGroup title="8. Наша норма выработки 35 часов в неделю. Готов её выполнить?">
          <ui-radio label="да" name="question_2915" value="10578" v-model="fields.question_2915" required/>
          <ui-radio label="нет" name="question_2915" value="10579" v-model="fields.question_2915" required/>
        </FormGroup>

        <FormGroup title="9. Какой график тебе подходит?">
          <ui-radio label="5/2" name="question_2916" value="10580" v-model="fields.question_2916" required/>
          <ui-radio label="2 через 2" name="question_2916" value="10581" v-model="fields.question_2916" required/>
          <ui-radio label="оба варианта подходят" name="question_2916" value="10582"
                    v-model="fields.question_2916" required/>
        </FormGroup>

        <FormGroup title="10. Есть ли у тебя дома компьютер в рабочем состоянии?">
          <ui-radio label="да" name="question_2917" value="10583" v-model="fields.question_2917" required/>
          <ui-radio label="нет" name="question_2917" value="10584" v-model="fields.question_2917" required/>
        </FormGroup>

        <FormGroup title="11. Есть ли у тебя наушники с микрофоном для компьютера?">
          <ui-radio label="да" name="question_2918" value="10585" v-model="fields.question_2918" required/>
          <ui-radio label="нет" name="question_2918" value="10586" v-model="fields.question_2918" required/>
        </FormGroup>

        <FormGroup title="12. Есть ли у тебя дома доступ в интернет на высокой скорости?">
          <ui-radio label="да" name="question_2919" value="10587" v-model="fields.question_2919" required/>
          <ui-radio label="нет" name="question_2919" value="10588" v-model="fields.question_2919" required/>
          <ui-radio label="только мобильный интернет" name="question_2919" value="10589"
                    v-model="fields.question_2919" required/>
        </FormGroup>

        <FormGroup title="13. У тебя есть возможность обеспечить тишину на время работы на линии?">
          <ui-radio label="да" name="question_2920" value="10590" v-model="fields.question_2920" required/>
          <ui-radio label="нет" name="question_2920" value="10591" v-model="fields.question_2920" required/>
        </FormGroup>

        <div class="application__send">
          <ui-btn :disabled="isBtnDisabled" type="submit">Отправить анкету</ui-btn>
          <ui-checkbox
              name="confirmation"
              required
              label="Даю согласие на обработку моих персональных данных"></ui-checkbox>
        </div>
      </Form>

      <portal to="application-popup">
        <Popup @close="togglePopup" v-if="isPopupShow" @onEscClose="onEscClose">
          <PopupNotify :error='isError'
                       :title='popup.title'
                       :subtitle='popup.subtitle'
                       :text='popup.text'
                       @close="togglePopup"
          />
        </Popup>
      </portal>
    </ui-container>
  </section>
</template>

<script>
import Form from '@/components/blocks/form/'
import FormGroup from '@/components/blocks/form/group'
import Popup from '@/components/blocks/popup'
import PopupNotify from '@/components/blocks/popup/notify'

export default {
  components: {
    Form,
    FormGroup,
    Popup,
    PopupNotify
  },
  data() {
    return {
      options: {
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
      },
      fields: {
        staff_f: '',
        staff_i: '',
        staff_o: '',
        sex: '',
        day_birthday: '',
        month_birthday: '',
        year_birthday: '',
        phone: '',
        skype: '',
        email: '',
        question_2912: '',
        question_2913: '',
        question_2914: '',
        question_2915: '',
        question_2916: '',
        question_2917: '',
        question_2918: '',
        question_2919: '',
        question_2920: ''
      },
      isBtnDisabled: false,
      isPopupShow: false,
      isError: false,
      popup: {
        title: '',
        subtitle: '',
        text: '',
      }
    }
  },


  methods: {
    range(start, end) {
      return Array(end - start + 1).fill().map((_, index) => start + index);
    },
    onEscClose(evt) {
      if (this.isPopupShow === true && evt.key == 'Escape') {
        this.togglePopup()
      }
    },
    togglePopup() {
      this.isPopupShow = !this.isPopupShow
      this.bodyToggleShow()
    },
    bodyToggleShow() {
      document.body.classList.toggle('modal-open');
    },
    onSubmit() {
      const {fields, $axios, onValidation} = this;
      const data = {
        api_key: 'bfrFde43Jp9Axc120MnQuTT',
        ip_address: '127.0.0.1',
      };

      let query = this.$route.query;
      query['click_id'] ? data['click_id'] = query['click_id'] : ''

      Object.keys(fields).forEach(key => {
        data[key] = fields[key]
      })

      this.togglePopup();
      $axios.post('https://anketa.prime-call.ru/land.php', data)
          .then(result => {
            this.popup = {
              title: 'Спасибо!',
              subtitle: 'Ваша анкета отправлена.',
              text: 'Наш мененджер свяжется с вами в ближайшее время.'
            }
          })
          .catch(error => {
            this.isError = true;
            this.popup = {
              title: 'Не получилось!',
              subtitle: 'Ваша анкета не отправлена.',
              text: 'Попробуйте отправить заполненную анкету по позже.'
            }
          })
    },
  }
}
</script>

<style lang="stylus">
.application {
  background-image url('./img/bg.png')
  background-size contain
  background-position center
  background-repeat no-repeat
  padding-top 80px
  padding-bottom 70px
  margin-top -70px

  .ui-title {
    font-size 44px
    line-height 56px
    margin-bottom 4px
    +mob() {
      max-width 320px
      margin-left auto
      margin-right auto
      padding-left 10px
      padding-right 10px
      font-size 32px
      line-height 40px
      margin-bottom 16px
    }
  }

  &__disclaimer{
    color $color-error
    font-size 12px
    display block
    margin-top 5px
  }

  &__subtitle {
    max-width 743px
    margin-left auto
    margin-right auto
    text-align center
    font-size 16px
    line-height 24px
    font-weight 500
    margin-bottom 56px
    margin-top 4px
    +mob() {
      text-align left
      margin-bottom 32px
      max-width 320px
      margin-left auto
      margin-right auto
      padding-left 10px
      padding-right 10px

    }
  }

  .ui-container {
    +mob() {
      width 100%
      padding-left 0
      padding-right 0
    }
  }

  .form {
    +mob() {
      max-width 320px
    }
  }

  .form-group {
    &__text {
      color #A2A2A2
      font-size 16px
      line-height 24px
      margin-bottom 10px
      max-width 560px
    }

    &--sex {
      .error-message {
        position relative
        top 10px
      }
    }
  }

  &__send {
    +mob() {
      padding-left 10px
      padding-right @padding-left
    }

    .ui-btn {
      display block
      width 100%
      max-width 745px
      margin-left auto
      margin-right auto
      margin-bottom 32px
      +mob() {
        max-width 290px
      }
    }
  }
}
</style>