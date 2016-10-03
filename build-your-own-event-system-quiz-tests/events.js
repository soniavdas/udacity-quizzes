// Create your own Event Tracker system:
//
// 1. create an `EventTracker` object
//    • it should accept a name when constructed
// 2. extend the `EventTracker` prototype with:
//    • an `on` method
//    • a `notify` method
//    • a `trigger` method
//
// EXAMPLE:
// function purchase(item) { console.log( 'purchasing ' + item); }
// function celebrate() { console.log( this.name + ' says birthday parties are awesome!' ); }
//
// var nephewParties = new EventTracker( 'nephews ');
// var richard = new EventTracker( 'Richard' );
//
// nephewParties.on( 'mainEvent', purchase );
// richard.on( 'mainEvent', celebrate );
// nephewParties.notify( richard, 'mainEvent' );
//
// nephewParties.trigger( 'mainEvent', 'ice cream' );
//


var EventTracker = function(name) {

    this.name = name;
    this._events = {};

    this._notify = {};
};

EventTracker.prototype.on = function(event, callback) {
  if (!this._events[event]) {
    this._events[event] = [];
  }

    this._events[event].push(callback);
}

EventTracker.prototype.notify = function(eventTrackerObj, event) {
  if (!this._notify[event]) {
    this._notify[event] = [];
  }
    this._notify[event].push(eventTrackerObj);
}

EventTracker.prototype.trigger = function(event, args) {

var eventArray = this._events[event];
if (eventArray) {
  for(var i  =0; i  < eventArray.length; i++ ) {
    eventArray[i](args);
  }
}

  var notifyObjArray = this._notify[event];
  if (notifyObjArray) {
    for(var i =0; i  < notifyObjArray.length; i++ ) {
      notifyObjArray[i].trigger(event, args);
    }
  }
}
