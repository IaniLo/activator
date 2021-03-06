/*
 Copyright (C) 2016 Lightbend, Inc <http://www.lightbend.com>
 */
define([
  "commons/websocket",
  './open/open',
  './templates/templates',
  './working/working',
  // 'commons/ajax',
  'widgets/modals/modals'
  // 'css!./home'
],function(
  websocket,
  open,
  templates,
  working,
  // fs,
  modals
) {

  var SharedState = {
    working: ko.observable(false)
  };

  var State = {
    open: open.render(SharedState),
    templates: templates.render(SharedState),
    working: working.render(SharedState),
    modals: modals.render()
  };

  return {
    render: function() {
      ko.applyBindings(State);
    }
  }
});
