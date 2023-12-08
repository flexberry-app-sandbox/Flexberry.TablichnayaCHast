import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  фамилия: DS.attr('string'),
  накладная: DS.belongsTo('i-i-s-tablichnaya-c-hast-накладная', { inverse: 'ответственный', async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-tablichnaya-c-hast-ответственный.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-tablichnaya-c-hast-ответственный.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  накладная: {
    descriptionKey: 'models.i-i-s-tablichnaya-c-hast-ответственный.validations.накладная.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтветственныйE', 'i-i-s-tablichnaya-c-hast-ответственный', {
    фамилия: attr('Фамилия', { index: 0 })
  });

  modelClass.defineProjection('ОтветственныйL', 'i-i-s-tablichnaya-c-hast-ответственный', {
    фамилия: attr('Фамилия', { index: 0 })
  });
};
