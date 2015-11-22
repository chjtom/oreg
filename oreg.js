WidgetCollection = new Mongo.Collection('widget');
if (Meteor.isClient) {
  Template.widget.events({
    'click button.createWidget': function(event, template) {
      WidgetCollection.insert({
        size: 'tanga'
      });
      console.log('addding tange');
      $('body').append("<div class='widget'>New widget</div>");
    },
    'click button.pumbanolla': function(event) {
      WidgetCollection.insert({
        size: 'pumbanölla'
      });
      console.log('addding po,');
    }
  });
  Template.widget.helpers({});
}