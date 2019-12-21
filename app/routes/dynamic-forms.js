import Route from '@ember/routing/route';


export default Route.extend({
  model() {
    return [
      {
        "schema": [
          {
            "title": "First Name",
            "type": "text",
            "id": "firstName",
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
            "id": "lastName",
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
            "id": "email",
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
            "id": "gender",
            "name": "gender",
            "enum":['Male','Female']
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
          },
          {
            "title":"Job role",
            "type":"select",
            "name": "job-role",
            "id": "jobRole",
            "enum":['Designer','Developer', 'Tester']
          }
        ]
      },
      {
        "actions": {
          "submit": "submit-application"
        }
      }
    ]
  }

});
