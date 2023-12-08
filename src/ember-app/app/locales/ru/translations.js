import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTablichnayaCHastНакладнаяLForm from './forms/i-i-s-tablichnaya-c-hast-накладная-l';
import IISTablichnayaCHastНакладнаяEForm from './forms/i-i-s-tablichnaya-c-hast-накладная-e';
import IISTablichnayaCHastНакладнаяModel from './models/i-i-s-tablichnaya-c-hast-накладная';
import IISTablichnayaCHastОтветственныйModel from './models/i-i-s-tablichnaya-c-hast-ответственный';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tablichnaya-c-hast-накладная': IISTablichnayaCHastНакладнаяModel,
    'i-i-s-tablichnaya-c-hast-ответственный': IISTablichnayaCHastОтветственныйModel
  },

  'application-name': 'Tablichnaya c hast',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tablichnaya c hast',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tablichnaya c hast',
          title: 'Tablichnaya c hast'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'tablichnaya-c-hast': {
          caption: 'TablichnayaCHast',
          title: 'TablichnayaCHast',
          'i-i-s-tablichnaya-c-hast-накладная-l': {
            caption: 'Накладная',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-tablichnaya-c-hast-накладная-l': IISTablichnayaCHastНакладнаяLForm,
    'i-i-s-tablichnaya-c-hast-накладная-e': IISTablichnayaCHastНакладнаяEForm
  },

});

export default translations;
