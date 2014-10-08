# Geofancy MQTT Client Sample App

## Usage

Clone this repo:
```
git clone https://github.com/Geofancy/geofancy-nodejs-mqtt-sample
```

Install dependencies:
```
npm install
```

Open up `app.js`, enter your `my.geofancy.com` credentials. Also replace any occurences of `username` by your `my.geofancy.com` Username.

Run the App:
```
node app.js
```

Log in to `my.geofancy.com` and publish unter `{username}/hello-world` (replace `{username}` with your actual Username.

Your Message should appear in your local console.