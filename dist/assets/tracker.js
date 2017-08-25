"use strict";



define('tracker/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    host: 'https://bnr-tracker-api.herokuapp.com',
    namespace: 'api'
  });
});
define('tracker/app', ['exports', 'tracker/resolver', 'ember-load-initializers', 'tracker/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('tracker/components/flash-alert', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: ["alert"],
    classNameBindings: ['typeClass'],
    typeClass: Ember.computed('alertType', function () {
      return "alert-" + this.get('alertType');
    }),
    typeTitle: Ember.computed('alertType', function () {
      return Ember.String.capitalize(this.get('alertType'));
    }),
    click: function click() {
      this.get('close')();
    }
  });
});
define("tracker/components/listing-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: ["media", "well"]
  });
});
define('tracker/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('tracker/components/x-option', ['exports', 'emberx-select/components/x-option'], function (exports, _xOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _xOption.default;
});
define('tracker/components/x-select', ['exports', 'emberx-select/components/x-select'], function (exports, _xSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _xSelect.default;
});
define('tracker/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    alertMessage: null,
    alertType: null,
    isAlertShowing: false,
    actions: {
      removeAlert: function removeAlert() {
        this.set('alertMessage', "");
        this.set('alertType', "success");
        this.set('isAlertShowing', false);
      }
    }
  });
});
define('tracker/controllers/sighting/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sighting: Ember.computed.alias('model.sighting'),
    actions: {
      update: function update() {
        var _this = this;

        if (this.get('sighting').get('hasDirtyAttributes')) {
          this.get('sighting').save().then(function () {
            _this.transitionToRoute('sightings');
          });
        }
      },
      cancel: function cancel() {
        if (this.get('sighting').get('hasDirtyAttributes')) {
          this.get('sighting').rollbackAttributes();
        }
        this.transitionToRoute('sightings');
      },
      delete: function _delete() {
        var self = this;
        if (window.confirm("Are you sure you want to delete this sighting?")) {
          this.get('sighting').destroyRecord().then(function () {
            self.transitionToRoute('sightings');
          });
        }
      }
    }
  });
});
define('tracker/helpers/app-version', ['exports', 'tracker/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('tracker/helpers/moment-from', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.momentFrom = momentFrom;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function momentFrom(params) {
    var _window;

    var time = (_window = window).moment.apply(_window, _toConsumableArray(params));
    var formatted = time.fromNow();
    return new Ember.Handlebars.SafeString('<span class="text-primary">' + formatted + '</span>');
  }

  exports.default = Ember.Helper.helper(momentFrom);
});
define('tracker/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('tracker/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('tracker/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tracker/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('tracker/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('tracker/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('tracker/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('tracker/initializers/export-application-global', ['exports', 'tracker/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('tracker/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('tracker/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('tracker/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("tracker/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('tracker/models/cryptid', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    cryptidType: _emberData.default.attr('string'),
    profileImg: _emberData.default.attr('string'),
    sightings: _emberData.default.hasMany('sighting')
  });
});
define('tracker/models/sighting', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    location: _emberData.default.attr('string'),
    createdAt: _emberData.default.attr('date'),
    sightedAt: _emberData.default.attr('date'),
    cryptid: _emberData.default.belongsTo('cryptid'),
    witnesses: _emberData.default.hasMany('witness')
  });
});
define('tracker/models/witness', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    fName: _emberData.default.attr('string'),
    lName: _emberData.default.attr('string'),
    email: _emberData.default.attr('string'),
    sightings: _emberData.default.hasMany('sighting'),
    fullName: Ember.computed('fName', 'lName', function () {
      return this.get('fName') + ' ' + this.get('lName');
    })
  });
});
define('tracker/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('tracker/router', ['exports', 'tracker/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('sightings', function () {
      this.route('new');
    });
    this.route('sighting', function () {
      this.route('edit', { path: "sightings/:sighting_id/edit" });
    });
    this.route('cryptids');
    this.route('cryptid', { path: 'cryptids/:cryptid_id' });
    this.route('witnesses');
    this.route('witness');
  });

  exports.default = Router;
});
define('tracker/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    actions: {
      flash: function flash(data) {
        this.controller.set('alertMessage', data.message);
        this.controller.set('alertType', data.alertType);
        this.controller.set('isAlertShowing', true);
      }
    }
  });
});
define('tracker/routes/cryptid', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {
      return this.store.findRecord('cryptid', params.cryptid_id);
    }
  });
});
define('tracker/routes/cryptids', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return this.store.findAll('cryptid');
    }
  });
});
define('tracker/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel() {
      this.transitionTo('sightings');
    }
  });
});
define('tracker/routes/sighting', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('tracker/routes/sighting/edit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {
      return Ember.RSVP.hash({
        sighting: this.store.findRecord('sighting', params.sighting_id),
        cryptids: this.store.findAll('cryptid'),
        witnesses: this.store.findAll('witness')
      });
    }
  });
});
define('tracker/routes/sighting/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('tracker/routes/sightings', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return this.store.findAll('sighting', { reload: true });
    }
  });
});
define('tracker/routes/sightings/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('tracker/routes/sightings/new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return Ember.RSVP.hash({
        sighting: this.store.createRecord('sighting'),
        cryptids: this.store.findAll('cryptid'),
        witnesses: this.store.findAll('witness')
      });
    },

    sighting: Ember.computed.alias('controller.model.sighting'),
    actions: {
      willTransition: function willTransition() {
        var sighting = this.get('controller.model.sighting');
        if (sighting.get('hasDirtyAttributes')) {
          sighting.deleteRecord;
        }
      },
      create: function create() {
        var self = this;
        this.get('sighting').save().then(function () {
          self.send('flash', { alertType: "success", message: "New sighting." });
          self.transitionTo('sightings');
        });
      },
      cancel: function cancel() {
        this.get('sighting').deleteRecord();
        this.transitionToRoute('sightings');
      }
    }
  });
});
define('tracker/routes/witness', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('tracker/routes/witnesses', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return this.store.findAll('witness');
    }
  });
});
define('tracker/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("tracker/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8ix4FlNP", "block": "{\"statements\":[[11,\"header\",[]],[13],[0,\"\\n  \"],[11,\"nav\",[]],[15,\"class\",\"navbar navbar-default\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[13],[0,\"\\n      \"],[4,\" Brand and toggle get grouped for better mobile display \"],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"navbar-header\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"navbar-toggle collapsed\"],[15,\"data-toggle\",\"collapse\"],[15,\"data-target\",\"#top-navbar-collapse\"],[13],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[0,\"Toggle navigation\"],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"a\",[]],[15,\"class\",\"navbar-brand\"],[13],[0,\"Tracker\"],[14],[0,\"\\n      \"],[14],[0,\"\\n\\n      \"],[4,\" Collect the nav links, forms, and other content for toggling \"],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"collapse navbar-collapse\"],[15,\"id\",\"top-navbar-collapse\"],[13],[0,\"\\n        \"],[11,\"ul\",[]],[15,\"class\",\"nav navbar-nav\"],[13],[0,\"\\n          \"],[11,\"li\",[]],[13],[0,\"\\n            \"],[6,[\"link-to\"],[\"sightings\"],null,{\"statements\":[[0,\"Sightings\"]],\"locals\":[]},null],[0,\"\\n          \"],[14],[0,\"\\n          \"],[11,\"li\",[]],[13],[0,\"\\n            \"],[6,[\"link-to\"],[\"cryptids\"],null,{\"statements\":[[0,\"Cryptids\"]],\"locals\":[]},null],[0,\"\\n          \"],[14],[0,\"\\n          \"],[11,\"li\",[]],[13],[0,\"\\n            \"],[6,[\"link-to\"],[\"witnesses\"],null,{\"statements\":[[0,\"Witnesses\"]],\"locals\":[]},null],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[4,\" /.navbar-collapse \"],[0,\"\\n    \"],[14],[4,\" /.container-fluid \"],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isAlertShowing\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"flash-alert\"],null,[[\"message\",\"alertType\",\"close\"],[[28,[\"alertMessage\"]],[28,[\"alertType\"]],[33,[\"action\"],[[28,[null]],\"removeAlert\"],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"  \"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/application.hbs" } });
});
define("tracker/templates/components/flash-alert", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WPq75glt", "block": "{\"statements\":[[11,\"strong\",[]],[13],[1,[26,[\"typeTitle\"]],false],[0,\"!\"],[14],[0,\" \"],[1,[26,[\"message\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/components/flash-alert.hbs" } });
});
define("tracker/templates/components/listing-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gnQ8hrPt", "block": "{\"statements\":[[11,\"img\",[]],[15,\"class\",\"media-object thumbnail\"],[16,\"src\",[34,[[26,[\"imagePath\"]]]]],[16,\"alt\",[34,[[26,[\"name\"]]]]],[15,\"width\",\"100%\"],[15,\"height\",\"100%\"],[13],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"caption\"],[13],[0,\"\\n  \"],[11,\"h3\",[]],[13],[1,[26,[\"name\"]],false],[14],[0,\"\\n  \"],[18,\"default\"],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/components/listing-item.hbs" } });
});
define('tracker/templates/components/x-select', ['exports', 'emberx-select/templates/components/x-select'], function (exports, _xSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xSelect.default;
    }
  });
});
define("tracker/templates/cryptid", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UG6wx72d", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"container text-center\"],[13],[0,\"\\n  \"],[11,\"img\",[]],[15,\"class\",\"img-rounded\"],[16,\"src\",[34,[[28,[\"model\",\"profileImg\"]]]]],[16,\"alt\",[34,[[28,[\"model\",\"type\"]]]]],[13],[14],[0,\"\\n  \"],[11,\"h3\",[]],[13],[1,[28,[\"model\",\"name\"]],false],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/cryptid.hbs" } });
});
define("tracker/templates/cryptids", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bgJA8Ist", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-3 text-center\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"cryptid\",[28,[\"cryptid\",\"id\"]]],null,{\"statements\":[[0,\"      \"],[1,[33,[\"listing-item\"],null,[[\"imagePath\",\"name\"],[[28,[\"cryptid\",\"profileImg\"]],[28,[\"cryptid\",\"name\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\"]],\"locals\":[\"cryptid\"]},{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"jumbotron\"],[13],[0,\"\\n    \"],[11,\"h1\",[]],[13],[0,\"No Creatures\"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]}],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/cryptids.hbs" } });
});
define("tracker/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nu+osByP", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Index Route\"],[14],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/index.hbs" } });
});
define("tracker/templates/sighting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "T20kX2q/", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/sighting.hbs" } });
});
define("tracker/templates/sighting/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6M0zYi8U", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Edit Sighting:\\n  \"],[11,\"small\",[]],[13],[0,\"\\n    \"],[1,[28,[\"model\",\"sighting\",\"location\"]],false],[0,\" - \"],[1,[33,[\"moment-from\"],[[28,[\"model\",\"sighting\",\"sightedAt\"]]],null],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"form\",[]],[5,[\"action\"],[[28,[null]],\"update\",[28,[\"model\"]]],[[\"on\"],[\"submit\"]]],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n    \"],[11,\"label\",[]],[15,\"for\",\"name\"],[13],[0,\"Cryptid\"],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"value\",\"type\",\"class\",\"name\",\"disabled\"],[[28,[\"model\",\"sighting\",\"cryptid\",\"name\"]],\"text\",\"form-control\",\"location\",true]]],false],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n    \"],[11,\"label\",[]],[13],[0,\"Witnesses\"],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"sighting\",\"witnesses\"]]],null,{\"statements\":[[0,\"      \"],[1,[33,[\"input\"],null,[[\"value\",\"type\",\"class\",\"name\",\"disabled\"],[[28,[\"witness\",\"fullName\"]],\"text\",\"form-control\",\"location\",true]]],false],[0,\"\\n\"]],\"locals\":[\"witness\"]},null],[0,\"  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n    \"],[11,\"label\",[]],[15,\"for\",\"loaction\"],[13],[0,\"Location\"],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"value\",\"type\",\"class\",\"name\",\"required\"],[[28,[\"model\",\"sighting\",\"location\"]],\"text\",\"form-contorl\",\"location\",true]]],false],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-info btn-block\"],[13],[0,\"Update\"],[14],[0,\"\\n  \"],[11,\"button\",[]],[15,\"class\",\"btn btn-block\"],[5,[\"action:\"],[\"cancel\"]],[13],[0,\"Cancel\"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"hr\",[]],[13],[14],[0,\"\\n\"],[11,\"button\",[]],[15,\"class\",\"btn btn-block btn-danger\"],[5,[\"action\"],[[28,[null]],\"delete\"]],[13],[0,\"\\n  Delete\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/sighting/edit.hbs" } });
});
define("tracker/templates/sighting/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "W3GcefXp", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/sighting/index.hbs" } });
});
define("tracker/templates/sightings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DFpX79jw", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-xs-6\"],[13],[0,\"\\n    \"],[11,\"h1\",[]],[13],[0,\"Sightings\"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"col-xs-6 h1\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"sightings.new\"],[[\"class\"],[\"pull-right btn btn-primary\"]],{\"statements\":[[0,\"      New Sighting\\n\"]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/sightings.hbs" } });
});
define("tracker/templates/sightings/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/1c26GDY", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-3 text-center\"],[13],[0,\"\\n\"],[6,[\"listing-item\"],null,[[\"imagePath\",\"name\"],[[28,[\"sighting\",\"cryptid\",\"profileImg\"]],[28,[\"sighting\",\"cryptid\",\"name\"]]]],{\"statements\":[[6,[\"if\"],[[28,[\"sighting\",\"location\"]]],null,{\"statements\":[[0,\"      \"],[11,\"h3\",[]],[13],[1,[28,[\"sighting\",\"location\"]],false],[14],[0,\"\\n      \"],[11,\"p\",[]],[13],[1,[33,[\"moment-from\"],[[28,[\"sighting\",\"sightedAt\"]]],null],false],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"h3\",[]],[15,\"class\",\"text-danger\"],[13],[0,\"Bogus Sighting\"],[14],[0,\"\\n\"]],\"locals\":[]}],[6,[\"link-to\"],[\"sighting.edit\",[28,[\"sighting\",\"id\"]]],[[\"tagName\",\"class\"],[\"button\",\"btn btn-success btn-block\"]],{\"statements\":[[0,\"    Edit\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n\"]],\"locals\":[\"sighting\"]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/sightings/index.hbs" } });
});
define("tracker/templates/sightings/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZPsoMbGk", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"New Sighting\"],[14],[0,\"\\n\"],[11,\"form\",[]],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n    \"],[11,\"label\",[]],[15,\"for\",\"name\"],[13],[0,\"Cryptid\"],[14],[0,\"\\n\"],[6,[\"x-select\"],null,[[\"value\",\"class\"],[[28,[\"model\",\"sighting\",\"cryptid\"]],\"form-control\"]],{\"statements\":[[0,\"      \"],[6,[\"x-option\"],null,null,{\"statements\":[[0,\"Select Cryptid\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"cryptids\"]]],null,{\"statements\":[[0,\"        \"],[6,[\"x-option\"],null,[[\"value\"],[[28,[\"cryptid\"]]]],{\"statements\":[[1,[28,[\"cryptid\",\"name\"]],false]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"cryptid\"]},null]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n    \"],[11,\"label\",[]],[13],[0,\"Witnesses\"],[14],[0,\"\\n\"],[6,[\"x-select\"],null,[[\"value\",\"multiple\",\"class\"],[[28,[\"model\",\"sighting\",\"witnesses\"]],true,\"form-control\"]],{\"statements\":[[0,\"      \"],[6,[\"x-option\"],null,null,{\"statements\":[[0,\"Select Witnesses\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"witnesses\"]]],null,{\"statements\":[[0,\"        \"],[6,[\"x-option\"],null,[[\"value\"],[[28,[\"witness\"]]]],{\"statements\":[[1,[28,[\"witness\",\"fullName\"]],false]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"witness\"]},null]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n    \"],[11,\"label\",[]],[15,\"for\",\"location\"],[13],[0,\"Location\"],[14],[0,\" \"],[1,[33,[\"input\"],null,[[\"value\",\"type\",\"class\",\"name\",\"required\"],[[28,[\"model\",\"sighting\",\"location\"]],\"text\",\"form-control\",\"location\",\"true\"]]],false],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"button\",[]],[15,\"type\",\"submit\"],[15,\"class\",\"btn btn-primary btn-block\"],[13],[0,\"Create\"],[14],[0,\"\\n  \"],[11,\"button\",[]],[15,\"class\",\"btn btn-link btn-block\"],[5,[\"action\"],[[28,[null]],\"cancel\"]],[13],[0,\"Cancel\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/sightings/new.hbs" } });
});
define("tracker/templates/witness", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EG+qPBLs", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/witness.hbs" } });
});
define("tracker/templates/witnesses", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EqRJbCWe", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Witnesses\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-6 col-md-4\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"well\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"thumbnail\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"caption\"],[13],[0,\"\\n          \"],[11,\"h3\",[]],[13],[1,[28,[\"witness\",\"fullName\"]],false],[14],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"panel panel-danger\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"panel-heading\"],[13],[0,\"Sightings\"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[\"witness\"]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "tracker/templates/witnesses.hbs" } });
});


define('tracker/config/environment', ['ember'], function(Ember) {
  var prefix = 'tracker';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("tracker/app")["default"].create({"name":"tracker","version":"0.0.0+ca397e84"});
}
//# sourceMappingURL=tracker.map
