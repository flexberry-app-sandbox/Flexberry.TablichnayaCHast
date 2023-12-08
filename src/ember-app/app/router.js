import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tablichnaya-c-hast-накладная-l');
  this.route('i-i-s-tablichnaya-c-hast-накладная-e',
  { path: 'i-i-s-tablichnaya-c-hast-накладная-e/:id' });
  this.route('i-i-s-tablichnaya-c-hast-накладная-e.new',
  { path: 'i-i-s-tablichnaya-c-hast-накладная-e/new' });
});

export default Router;
