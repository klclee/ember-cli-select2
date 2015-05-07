import Ember from 'ember';

export default Ember.Select.extend({
  initSelect2: function(){
    this.$().select2();
  }.on('didInsertElement')
});
