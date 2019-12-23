import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | submit-data', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:submit-data');
    assert.ok(route);
  });
});
