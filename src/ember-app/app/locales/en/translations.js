import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tablichnaya c hast',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tablichnaya c hast',
          title: 'Tablichnaya c hast'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tablichnaya-c-hast-накладная-l': IISTablichnayaCHastНакладнаяLForm,
    'i-i-s-tablichnaya-c-hast-накладная-e': IISTablichnayaCHastНакладнаяEForm
  },

});

export default translations;
