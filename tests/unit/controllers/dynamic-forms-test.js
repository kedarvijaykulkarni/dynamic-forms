import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';

module('Unit | Controller | dynamic-forms', function(hooks) {
  setupTest(hooks);
  const model =
    [
      EmberObject.create({
        "schema": [
          EmberObject.create({
            "title": "First Name",
            "type": "button",
            "id": "firstName",
            "name": "first-name",
            "maxlength": 5,
            "required": true,
            "attributes": {
              "data-test": "test-first-name",
              "class": "input-element"
            }
          }),
          EmberObject.create({
            "title": "Last Name",
            "type": "string",
            "id": "lastName",
            "name": "last-name",
            "maxlength": 50,
            "required": true,
            "attributes": {
              "data-test": "test-last-name",
              "class": "input-element"
            }
          }),
          EmberObject.create({
            "title": "Email",
            "type": "email",
            "id": "email",
            "name": "email",
            "required": true,
            "attributes": {
              "data-test": "test-email",
              "class": "input-element"
            }
          }),
          EmberObject.create({
            "title": "Birthday",
            "type": "date",
            "id": "birthDate",
            "name": "birth-date",
            "attributes": {
              "data-test": "test-email",
              "class": "input-element"
            }
          })
        ]
      }),
      EmberObject.create({
        "actions": {
          "submit": "onSubmitAction"
        }
      }),
    ];

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:dynamic-forms');
    assert.ok(controller);

    //set up the model
    controller.set('model', model);

    //check that we have element on the form
    const elements = controller.get('elements');
    assert.equal(elements.length, 4);

    const firstName = controller.get('elements.firstObject.title');
    assert.equal(firstName, "First Name", "first name element present");

    const lastName = elements[1].title;
    assert.equal(lastName, "Last Name", "Last name element present");

    const email = elements[2].title;
    assert.equal(email, "Email", "Email element present");

  });
});