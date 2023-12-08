import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tablichnaya-c-hast-накладная', 'Unit | Serializer | i-i-s-tablichnaya-c-hast-накладная', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tablichnaya-c-hast-накладная',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-tablichnaya-c-hast-накладная',
    'model:i-i-s-tablichnaya-c-hast-ответственный',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
