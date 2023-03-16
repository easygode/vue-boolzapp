# vue-boolzapp
#### Whatsapp Web Revisited

This project aims to replicate a version of WhatsApp Web using the technologies learnt so far in the Boolean class #89, course for Full Stack Developer.
The focus is mainly on the Front End using HTML and CSS for the visual grapghics of the web application and JavaScript boosted by Vue.js as the logic.

## Technologies
- HTML5
- CSS v3
- Vue.js v3. 3.0-alpha. 4


## Simple Messaging App with WhatsApp like interface

## Features
### Milestone 1
● Replica of the WhatsApp graphic interface with the ability to write messages.
  Sent messages are displayed in a static HTML in green color, while received messages are displayed in white color. 
  For this purpouse the layout is done with HTLM, styled with CSS.
  
● The contact list is rendered through the v-for directive in Vue.js that will display in the DOM the name and the image of each contact.

### Milestone 2
● For each contact, messages are visualized dynamically using the Vue.js v-for directive in the conversation panel.
● Clicking on the contact the conversation for the clicked contact will be displayed.

### Milestone 3
● The user has the ability to write a message. When hitting the "Enter" key the message is added in the conversation thread and displayed in green color.

● Each time a new message is entered, an automated "ok" return message is displayed in white color after 1 second.

### Milestone 4
● Search function in the input field on the left side: when searching contacts containing the search field are shown. For example searching for "mar" Marco, Martina are displayed

### Milestone 5 - optional
● Delete message: when clicking you can delete a message using a drop-down menu.

● Display of information such as time and last sent/received message within the contact list.

## Goodies and features for future releases

● Control for empty messages: it is not possible to send empty messages.
● Suggestions: instead of writing, user can pick and send quotes and standard messages.
● Correct time format using the Luxon library.
● Open a new chat for a new contact.
● When a new message is received from a contact, the contact automatically scrolls to the top of the contacts.
● Add emoticons for sending messages from a library.
● Welcome message: "Welcome, please select who you would like to chat with".
● Splash page visible for 1 second.
● Responsive App for all devices
● For mobile users display only the contact list, when clicking on the contact the conversation panel and messages are displayed.
● Icon to enlarge or reduce the font size with an appropriate css class (fonts are rendered relatevely).
● Icon to switch between light and dark mode