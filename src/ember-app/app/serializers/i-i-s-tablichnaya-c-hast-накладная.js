import { Serializer as НакладнаяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tablichnaya-c-hast-накладная';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НакладнаяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
