import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dynamic-forms', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dynamic-forms');
    assert.ok(route);
  });
});
