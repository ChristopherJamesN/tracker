'use strict';

define('tracker/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/flash-alert.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/flash-alert.js should pass ESLint\n\n');
  });

  QUnit.test('components/listing-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/listing-item.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/sighting/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/sighting/edit.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/moment-from.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/moment-from.js should pass ESLint\n\n');
  });

  QUnit.test('models/cryptid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/cryptid.js should pass ESLint\n\n');
  });

  QUnit.test('models/sighting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/sighting.js should pass ESLint\n\n');
  });

  QUnit.test('models/witness.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/witness.js should pass ESLint\n\n8:13 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/cryptid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cryptid.js should pass ESLint\n\n');
  });

  QUnit.test('routes/cryptids.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cryptids.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/sighting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sighting.js should pass ESLint\n\n');
  });

  QUnit.test('routes/sighting/edit.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sighting/edit.js should pass ESLint\n\n');
  });

  QUnit.test('routes/sighting/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sighting/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/sightings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sightings.js should pass ESLint\n\n');
  });

  QUnit.test('routes/sightings/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sightings/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/sightings/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sightings/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/witness.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/witness.js should pass ESLint\n\n');
  });

  QUnit.test('routes/witnesses.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/witnesses.js should pass ESLint\n\n');
  });
});
define('tracker/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('tracker/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'tracker/tests/helpers/start-app', 'tracker/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('tracker/tests/helpers/resolver', ['exports', 'tracker/resolver', 'tracker/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('tracker/tests/helpers/start-app', ['exports', 'tracker/app', 'tracker/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('tracker/tests/helpers/x-select', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.select = select;
  var jQuery = Ember.$;


  /**
   * Picks an option from the select and sets it to be `selected` in the DOM.
   *
   * @method select
   * @param {string|<jQuery>} selector - selector for the select to pick from.
   * @param {string} texts - text of the option you are picking
   */
  function select(selector) {
    for (var _len = arguments.length, texts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      texts[_key - 1] = arguments[_key];
    }

    var $select = selector instanceof jQuery ? selector : Ember.$(selector);
    var $options = $select.find('option');

    if (!$options.length) {
      throw 'No options found in ' + selector;
    }

    $options.each(function () {
      var _this = this;

      var $option = Ember.$(this);

      Ember.run(function () {
        _this.selected = texts.some(function (text) {
          // uppercase both texts so the helper isn't case sensastive.
          var optionText = $option.text().trim().toUpperCase();

          return optionText === text.toUpperCase();
        });

        if (_this.selected) {
          $option.prop('selected', true).trigger('change');
        }
      });
    });
  }
});
define('tracker/tests/integration/components/flash-alert-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('flash-alert', 'Integration | Component | flash alert', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "8y5qGQko",
      "block": "{\"statements\":[[1,[26,[\"flash-alert\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "mUV4lJst",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"flash-alert\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tracker/tests/integration/components/listing-item-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('listing-item', 'Integration | Component | listing item', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "QjCxfLks",
      "block": "{\"statements\":[[1,[26,[\"listing-item\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "xCgrRWcK",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"listing-item\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('tracker/tests/integration/helpers/moment-from-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('moment-from', 'helper:moment-from', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "8QybL971",
      "block": "{\"statements\":[[1,[33,[\"moment-from\"],[[28,[\"inputValue\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '1234');
  });
});
define('tracker/tests/test-helper', ['tracker/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('tracker/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/flash-alert-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/flash-alert-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/listing-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/listing-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/moment-from-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/moment-from-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/sighting/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/sighting/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/sightings/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/sightings/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/cryptid-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/cryptid-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/sighting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/sighting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/witness-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/witness-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cryptid-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cryptid-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/cryptids-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cryptids-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sighting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sighting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sighting/edit-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sighting/edit-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sighting/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sighting/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sightings-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sightings-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sightings/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sightings/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/sightings/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sightings/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/witness-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/witness-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/witnesses-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/witnesses-test.js should pass ESLint\n\n');
  });
});
define('tracker/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('tracker/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('tracker/tests/unit/controllers/sighting/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:sighting/edit', 'Unit | Controller | sighting/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('tracker/tests/unit/controllers/sightings/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:sightings/new', 'Unit | Controller | sightings/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('tracker/tests/unit/models/cryptid-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('cryptid', 'Unit | Model | cryptid', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('tracker/tests/unit/models/sighting-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('sighting', 'Unit | Model | sighting', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('tracker/tests/unit/models/witness-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('witness', 'Unit | Model | witness', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('tracker/tests/unit/routes/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/cryptid-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:cryptid', 'Unit | Route | cryptid', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/cryptids-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:cryptids', 'Unit | Route | cryptids', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/sighting-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:sighting', 'Unit | Route | sighting', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/sighting/edit-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:sighting/edit', 'Unit | Route | sighting/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/sighting/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:sighting/index', 'Unit | Route | sighting/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/sightings-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:sightings', 'Unit | Route | sightings', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/sightings/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:sightings/index', 'Unit | Route | sightings/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/sightings/new-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:sightings/new', 'Unit | Route | sightings/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/witness-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:witness', 'Unit | Route | witness', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('tracker/tests/unit/routes/witnesses-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:witnesses', 'Unit | Route | witnesses', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('tracker/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
