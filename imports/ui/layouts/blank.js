/* global alert */

import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { TAPi18n } from 'meteor/tap:i18n';
import { T9n } from 'meteor/softwarerero:accounts-t9n';
import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';

import './blank.html';

Template.blankLayout.rendered = function(){

    // Add gray color for background in blank layout
    $('body').addClass('gray-bg');

}

Template.blankLayout.destroyed = function(){

    // Remove special color for blank layout
    $('body').removeClass('gray-bg');
};