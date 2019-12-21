import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';

module('Unit | Controller | dynamic-forms', function(hooks) {
  setupTest(hooks);

  const jsonform = [
      {
        "schema": [
          {
            "title": "First Name",
            "type": "text",
            "key": "firstName",
            "name": "first-name",
            "maxlength": 5,
            "required": true,
            "placeholder": "Enter first your name",
            "attributes": {
              "data-test": "test-first-name",
              "class": "input-element"
            }
          },
          {
            "title": "Last Name",
            "type": "text",
            "key": "lastName",
            "name": "last-name",
            "placeholder": "Enter last your name",
            "maxlength": 50,
            "required": true,
            "attributes": {
              "data-test": "test-last-name",
              "class": "input-element"
            }
          },
          {
            "title": "Email",
            "type": "email",
            "key": "email",
            "name": "email",
            "placeholder": "Enter your email",
            "required": true,
            "attributes": {
              "data-test": "test-email",
              "class": "input-element"
            }
          },
          {
            "title":"Gender",
            "type":"radio",
            "key": "gender",
            "name": "gender",
            "enum":['Male','Female']
          },
          {
            "title": "Birthday",
            "type": "date",
            "key": "birthDate",
            "name": "birth-date",
            "attributes": {
              "data-test": "test-email",
              "class": "input-element"
            }
          },
          {
            "title":"Job role",
            "type":"select",
            "name": "job-role",
            "key": "jobRole",
            "enum":['Designer','Developer', 'Tester']
          }
        ]
      },
      {
        "actions": {
          "submit": "submit-application"
        }
      }
    ];

  const data = EmberObject.create({
    firstName: 'Todd',
    lastName: 'Jordan',
    email: 'email@gmail.com',
    gender: 'Male',
    birthDate: null,
    jobRole: 'Developer',
  });

  const model = EmberObject.create({
        jsonform,
        data
      });

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:dynamic-forms');
    assert.ok(controller, "controller set properly");

    //set up the model
    controller.set('model', model);

    //check that we have element on the form
    const elements = controller.get('elements');
    assert.equal(elements.length, 6, "Six elements are render in the page");

    const firstName = controller.get('elements.firstObject.title');
    assert.equal(firstName, "First Name", "first name element present");

    const lastName = controller.get('elements')[1].title;
    assert.equal(lastName, "Last Name", "Last name element present");

    const email = controller.get('elements')[2].title;
    assert.equal(email, "Email", "Email element present");

  });
});