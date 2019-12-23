import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  elements: alias('model.jsonform.firstObject.schema'),
  actions: {
    async onSubmit(/*e*/) {
      // write data for pest
      // const url = 'https://www.discovery.com/';
      // const data = this.elements;
      // try {
      //   const response = await fetch(url, {
      //     method: 'POST', // or 'PUT'
      //     body: JSON.stringify(data), // data can be `string` or {object}!
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   });
      //   const json = await response.json();
      //   console.log('Success:', JSON.stringify(json));
      // } catch (error) {
      //   console.error('Error:', error);
      // }
    }
  }
});
