/** @jsx React.DOM */

var React = require('react');
var Card  = require('./Card.jsx');

var containerElements = document.querySelectorAll(".container");

for (var i=0, max=containerElements.length; i < max; i++) {

     document.getElementById(containerElements[i].id).addEventListener('initCard', function(e) {

      var targetElement = e.detail.targetElem;

      console.info('New Event: ' + e.type + ' for ' + targetElement);
      console.info('Custom data: ', e.detail);

      React.render(
        <Card data={e.detail} key={targetElement} />,
        document.getElementById(targetElement));

    });
}

