# Leads Dashboard
This project will present a custom full-screen dashboard and show live notifications on top of it when a custom event is received from Active Campaign. You can set it to show as many different dashboards as you want, and change all timers.

It works by showing the dashboard URL in an iframe and displays notifications using sockets.io with incoming JSON data from Active Campaign.

It comes complete with confetti and a nice little *cha-ching* sound to indicate that a user has converted. :)

![screenshot-image](https://i.imgur.com/NkuWOMv.jpg)


### Instructions

**app.js**

should work out of the box, of course you can change all the text that gets sent to the frontend. You can also pick any value from the incoming JSON to display, if you for example wan't to show something else about the contact that has converted, for example their tag or some custom field.

**frontend.js**

First line needs to be changed to the IP or URL that the server is running on.

```javascript
var socket = io.connect('http://localhost:3000');
```

Here you configure the list of the dashboards you want to show.

```javascript
$(document).ready(function(){
  var locations = [
    "https://datastudio.google.com/embed/reporting/1d100e70-2065-4fab-81f3-0b9417b5eabb/page/c2P1",
    "https://datastudio.google.com/embed/reporting/1d100e70-2065-4fab-81f3-0b9417b5eabb/page/c2P1"
  ];
```
