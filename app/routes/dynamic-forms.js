import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        "schema": [
          {
            "title": "First Name",
            "type": "string",
            "id": "firstName",
            "name": "first-name",
            "maxlength": 5,
            "required": true,
            "attributes": {
              "data-test": "test-first-name",
              "class": "input-element"
            }
          },
          {
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
          },
          {
            "title": "Email",
            "type": "email",
            "id": "email",
            "name": "email",
            "required": true,
            "attributes": {
              "data-test": "test-email",
              "class": "input-element"
            }
          },
          {
            "title": "Birthday",
            "type": "date",
            "id": "birthDate",
            "name": "birth-date",
            "attributes": {
              "data-test": "test-email",
              "class": "input-element"
            }
          }
        ]
      },
      {
        "actions": {
          "submit": "onSubmitAction"
        }
      }
    ]
  }

});
