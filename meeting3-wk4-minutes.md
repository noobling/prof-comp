# Meeting 3 Week 4 minutes

## Matters Arising from last weeks minutes meeting
* Start: 1:06pm
* End: 2:14pm
### Sprint 2
Michael
* Need to start assigning tasks for the next sprint
* User stories need to start breaking it down
* We have three main subsystems: iOS, android, server with the mysql database attached to it, and we have the web service
* Need to break down the tasks that need to be worked on for the iOS, android and the web server
David
* Broke down the entire tech stack
* Client side we have
  * iOS and android
  * These communicate with the webservice using JSON requests e.g. {"code":"123"}
* Service side we have
  * Laravel app that will act as both an api server for the mobile apps and also a website
  * There will be a mysql database where the laravel app will communicate with to read and write data
Adam
  * We should breaking down the roles like this: testing, UI, communication, data visualisation
Joshua
* We could use blocks to represent sleeping patterns this would be a nice way 

### 100 dollar thing
Michael
* Says we need to submit the 100 dollar thing to the client to vote on what features are most important
* Platform
  * local data
  * Questionaire
  * Visualisation
  * Notifications
  * Super admin
* Server
  * Large table storage
  * Excel conversion
  * Security
* Scretch Goals
  * Snoring dector
  * Light detector
  * Wearable integration
  * Voice commands

### Technical roles
Everyone decided with the following teams. David and Michael on the webservice, Tiaga and Adam on the iOS app, Zihao and Joshua on the android app

### Super Admin
Joshua
* There will be one super admin to create researcher account

## Action Items
* Talk to mentor about if we could use uwa's style for our app
* Get started with building the app, impelment the base scaffolding
* Joshua builds the layout for the app
* Adam top priority to get test flight up and running
* Clarify with client what data is sensitive 
* Discuss role changes especially the group leader role
