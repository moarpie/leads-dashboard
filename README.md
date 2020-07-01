# Leads Dashboard
This project will show any dashboard you choose and show live notifications on top of it with incoming webhooks from Active Campaign.

### Instructions

**app.js** should works out of the box, of course you can change the text that gets sent to the frontend. You can also pick any value from the incoming JSON to display, if you for example wan't something else shown about the contact in Active Campaign.

**frontend.js**


First line needs to be changed to the IP or URL that the server is running on.

```var socket = io.connect('http://localhost:3000');```

You can also change all the timer that control the various things that happen on the screen.
