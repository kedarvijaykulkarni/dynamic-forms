import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

const jsonform = [
      {
        "schema": [
          {
            "title": "First Name",
            "type": "text",
            "key": "firstName",
            "name": "first-name",
            "maxlength": 50,
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
      }
    ];

export default Route.extend({
  model() {

    const data = EmberObject.create({
      firstName: 'Kedar',
      lastName: 'Kulkarni',
      email: 'kedarvijaykulkarni@gmail.com',
      gender: 'Male',
      birthDate: '1981-07-15',
      jobRole: 'Developer',
    });

    return {
      jsonform,
      data
    }
  }

});
