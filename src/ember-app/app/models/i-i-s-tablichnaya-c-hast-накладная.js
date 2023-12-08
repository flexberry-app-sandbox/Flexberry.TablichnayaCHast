import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НакладнаяMixin
} from '../mixins/regenerated/models/i-i-s-tablichnaya-c-hast-накладная';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НакладнаяMixin, Validations, {
});

defineProjections(Model);

export default Model;
