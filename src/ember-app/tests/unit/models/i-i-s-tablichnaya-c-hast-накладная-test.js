import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tablichnaya-c-hast-накладная', 'Unit | Model | i-i-s-tablichnaya-c-hast-накладная', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tablichnaya-c-hast-накладная',
    'model:i-i-s-tablichnaya-c-hast-ответственный',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
