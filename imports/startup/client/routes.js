import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/layouts/main.js';
import '../../ui/layouts/blank.js';
import '../../ui/pages/root-redirector.js';
import '../../ui/pages/lists-show-page.js';
import '../../ui/pages/app-not-found.js';

// Import to override accounts templates
import '../../ui/accounts/accounts-templates.js';

FlowRouter.route('/lists/:_id', {
  name: 'Lists.show',
  action() {
    BlazeLayout.render('App_body', { main: 'Lists_show_page' });
  },
});

FlowRouter.route('/list', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'app_rootRedirector' });
  },
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

FlowRouter.route('/dashboard', {
  action() {
    BlazeLayout.render('mainLayout', { main: 'dashboard' });
  },
});

FlowRouter.route('/profile', {
  action() {
    BlazeLayout.render('mainLayout', { main: 'profile' });
  },
});

FlowRouter.route('/', {
  action() {
    BlazeLayout.render('mainLayout');
  },
});