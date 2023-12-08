import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tablichnaya-c-hast.caption'),
          title: i18n.t('forms.application.sitemap.tablichnaya-c-hast.title'),
          children: [{
            link: 'i-i-s-tablichnaya-c-hast-накладная-l',
            caption: i18n.t('forms.application.sitemap.tablichnaya-c-hast.i-i-s-tablichnaya-c-hast-накладная-l.caption'),
            title: i18n.t('forms.application.sitemap.tablichnaya-c-hast.i-i-s-tablichnaya-c-hast-накладная-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})