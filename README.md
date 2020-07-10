# Leads Dashboard
This project will show as many dashboards as you choose and show live notifications on top of it when a contact event occurs in Active Campaign. It works by showing the URL in an iframe and display notifications using sockets.io with incoming JSON data from Active Campaign.

It comes complete with confetti and a nice little *cha-ching* sound to indicate that a user has converted. :)

### Instructions

**app.js**

should work out of the box, of course you can change all the text that gets sent to the frontend. You can also pick any value from the incoming JSON to display, if you for example wan't something else shown about the contact in Active Campaign.

**frontend.js**

First line needs to be changed to the IP or URL that the server is running on.

```var socket = io.connect('http://localhost:3000');```

You can also change all the timer that control the various things that happen on the screen.
