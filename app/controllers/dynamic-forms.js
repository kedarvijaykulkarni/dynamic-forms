import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  elements: alias('model.firstObject.schema'),
  isButton: computed('model', function(){
    return this.model.firstObject.type === "button";
  }),

  actions: {
  }
});
