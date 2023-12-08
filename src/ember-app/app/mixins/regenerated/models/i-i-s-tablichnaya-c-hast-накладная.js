import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  типНакл: DS.attr('string'),
  ответственный: DS.hasMany('i-i-s-tablichnaya-c-hast-ответственный', { inverse: 'накладная', async: false })
});

export let ValidationRules = {
  типНакл: {
    descriptionKey: 'models.i-i-s-tablichnaya-c-hast-накладная.validations.типНакл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответственный: {
    descriptionKey: 'models.i-i-s-tablichnaya-c-hast-накладная.validations.ответственный.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НакладнаяE', 'i-i-s-tablichnaya-c-hast-накладная', {
    типНакл: attr('Тип накл', { index: 0 })
  });

  modelClass.defineProjection('НакладнаяL', 'i-i-s-tablichnaya-c-hast-накладная', {
    типНакл: attr('Тип накл', { index: 0 })
  });
};
