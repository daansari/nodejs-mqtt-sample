var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://username:password@my.geofancy.com');

client.subscribe('username/hello-world');
client.publish('username/hello-world', 'hello alltogether!');
client.on('message', function(topic, message) {
  console.log('Topic: ' + topic + ' Message: ' + message);
});