var mqtt = require('mqtt')

var username = 'YOUR_USERNAME';
var password = 'YOUR_PASSWORD'

// Crreate MQTT Client, be sure to use mqtts:// to establish an TLS secured connection
var client = mqtt.connect('mqtts://' + username + ':' + password + '@my.geofancy.com');

// Subscribe to some event handlers
client.on('connect', function (packet) {
  console.log('MQTT Client connected.');
});
client.on('error', function (error) {
  console.log('Error when connecting: ', error);
});
client.on('disconnect', function() {
  console.log('MQTT Client disconnected');
});
client.on('close', function() {
  console.log('Connection closed');
});
client.on('message', function(topic, message) {
  console.log('Topic: ' + topic + ' Message: ' + message);
});

// Subscribe to and publish sample topics
client.subscribe(username + '/hello-world');
client.publish(username + '/hello-world', 'hello alltogether!');
