/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-select2',
  included: function(app) {
    this._super.included(app);

    app.import({
      development: app.bowerDirectory + '/select2/dist/js/select2.js',
      production: app.bowerDirectory + '/select2/dist/js/select2.min.js'
    });

    app.import(app.bowerDirectory +'/select2/dist/css/select2.css');
  }
};
