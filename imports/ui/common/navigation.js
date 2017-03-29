import { metisMenu } from 'meteor/waitingkuo:metismenu';

import './navigation.html';

Template.navigation.onRendered(function () {
    // Initialize metisMenu
    $('#side-menu').metisMenu();
});

Template.navigation.helpers({
  emailLocalPart() {
    const email = Meteor.user().emails[0].address;
    return email.substring(0, email.indexOf('@'));
  }
});