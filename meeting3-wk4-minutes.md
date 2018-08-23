# Meeting 3 Week 4 minutes

## Welcome
In attendence: Mr Adam Chambost, Mr Michael Dorrell, Mr Taige Liu, Mr Zihao Liu, Mr Joshua Pollard, Mr David Yu

Apologies: None

Absent: None

Location: Meeting Room 1, Clough Centre, UWA

Meeting opened: 1:06pm

Meeting adjourned: 2:14pm

## Matters Arising from last weeks minutes meeting
N/A

## General Business
### Sprint 2 Discussion
Michael Communicated the following to the group
* Need to start assigning tasks for the next sprint
* User stories need to be broken down
* We have three main subsystems: iOS, android, server with the mysql database attached to it, and we have the web service
* Need to break down the tasks that need to be worked on for the iOS, android and the web server

### Looking into the tech stack required
David did the following:
* Broke down the entire tech stack
* Client side we have
  * iOS and android
  * These communicate with the webservice using JSON requests e.g. {"code":"123"}
* Server side we have
  * Laravel app that will act as both an api server for the mobile apps and also a website
  * There will be a mysql database where the laravel app will communicate with to read and write data to the database
* The server will exist in the cloud and the mobile apps will exist on the user's phones

Adam said the following:
  * We should break down the roles like this: testing, UI, communication, data visualisation
  
Joshua suggested:
* We could use blocks to represent sleeping patterns this would be a nice way 

### 100 dollar assessment to be submitted to client
Michael says the following:
* We need to submit the 100 dollar thing to the client to vote on what features are most important to them
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
Joshua says the following:
* There will be one super admin to create researcher account

## Action Items To Be Completed Before Next Meeting
* Talk to mentor about if we could use uwa's style for our app
* Get started with building the app, impelment the base scaffolding
* Joshua builds the layout for the app
* Adam's top priority to get test flight up and running
* Clarify with client what data is sensitive 
* Discuss role changes especially the group leader role
