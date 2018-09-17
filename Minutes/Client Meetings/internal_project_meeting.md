# Internal Project Retrospective

## Meeting Details
In attendance: Taige Liu, Zihao Liu, David Yu, Joshua Pollard, Michael Dorrell

Absent: Adam Chambost

Location: Meeting Room 1, Clough Centre, UWA

Meeting opened: 8:10pm

Meeting adjourned: 8:50pm

## A Review of Group Cohesiveness

Taige suggests meeting up during to week code in order to spend more time working together.

* Zihao agrees with more collaboration working together.

* David suggests instead of trying to get everyone together we just have partial group and run with that

Everyone seemed to find the experienced people have done a good job mentoring the less experienced people

## Thoughts on the project in general

So far it has been a good project because everything is well defined and the client has been very responsive and amicable to us.
Unfortunately our app must meet a few requirements that hinder the usability of it a tiny bit. e.g. Not being able to store any private user information which means the app cannot be personalised.
The main high level technical challenge for project is dealing with the large scale of the form - having around 20 questions. e.g. How to layout the form, how to display the long questions on all devices.

## Team introspection thus far

*David says:*

* I am quite pleased with how friendly we all are because it makes working with everyone much easier.

* It seems like we are facing a barrier due to the technical nature and scope of the app coupled with lack of experience. A lot of your time has been taken up just trying to learn all these new things.

    * *Joshua responds:* That is true but recently my productivity has increased as I become more familiar with the technologies.
    
    * *Michael responds:* I have had issues learning the frameworks required to a point where it can be useful, so I hope to play a larger role in testing and documentation.
    
*Taige says:*

* We should collaborate a bit more, so far we have not been doing that as much as we could have.
    
    * *Everyone agrees*
    
    * *David responds*: It has been very hard just trying to get everyone in the room on a date and time I think instead we could try just having a day each week where we can work together and there are no strict times people have to stay or leave at.
    
    * *Everyone agrees*
    
* Main issue I faced was time management, there was a lot of things going on all at once e.g. projects and exams.

    * *Everyone agrees*
    
    * *David responds*: We should prepare for this next sprint by doing as much work in our period of lull.
    
    * *Everyone agrees*
    
* *Michael says:*

    * Focusing on what went well, I'm very pleased with how far the app has come in such a short time. David and Zihao's work on the web app and android version are especially impressive. Taige, Joshua and I seem to have gotten more familiar with the frameworks and systems so I'm sure we'll be able to keep up productivity during the next sprint.
    
    * *Everyone agrees*

## Issues with development thus far

Development of mobile app has been lagging a bit behind the rest of the project

* *David asks*: Should we continue with the development? 

    * *Everyone responds with yes*
    
* *Zihao says*: Yes it has been hard for Taige since Adam has left 

    *David makes following suggestions to resolve this*:
    
    * Scale back the features on mobile
    
    * He jumps on to help everyone with mobile dev but this might mean he is doing too much
    
    * Use the progressive web application as a fallback
    
* *Taige says*: Should be fine once university is not so busy

Communication between mobile app and server 
* *Zihao says*: It has been hard trying to send a request to the webserver
    *Team makes following suggestions*
    * Use a HTTP library (XHR library (JS, Ajax) or Native Android solutions)
    * Do more research

## Potential issues in Sprint 3

Cost of delivering the app to users

* Website can be hosted for free with Heroku
* Mobile apps costs
    * Android going to cost $50/year
    * iOS cost $99/year

Solution to excessive costs

* APK link on website
* Rely on client to distribute
* Split the cost with team
* Use a progressive web application
        
## Action Items

* Set up a day each week to collaborate on the project
* Look into how team can manage time more effectively