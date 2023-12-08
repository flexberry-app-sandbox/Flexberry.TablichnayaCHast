import {
  defineNamespace,
  defineProjections,
  Model as НакладнаяMixin
} from '../mixins/regenerated/models/i-i-s-tablichnaya-c-hast-накладная';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НакладнаяMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
