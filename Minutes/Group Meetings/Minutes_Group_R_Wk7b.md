# Auditor Meeting Week 7

## Welcome
Location: Clough Meeting Room 1 G01A

In attendance: Syed - Auditor, David - Team Leader, Michael, Zihao, Joshua, Taige

Apologies: Adam

Meeting Start: 3:19pm

Meeting Adjourned 4:14pm

## Team Report (What the team has done)
* David
    * Done:
		* Technical Changes
			* continuous integration implemented, every commit will be run against the testing suite
	* To do:
		* Website to be ready within the next week.
		    * Ready for user testing
				* Support for IE
	
* Michael
	* Followed tutorial 
		* Learnt data integration
	* Taking tasks from David
	* To do
		* Continue on Laravel and maybe move onto Vue
	
* Taige
	* Covering initial syntax
	* Found good kit that does research questionnaires
	* Do not understand enough syntax to understand kit tutorial
	* To do:
		* Finish enough backup basic syntax to understand kit and implement
		* May become SWE in iOS if Adam is not able to participate
	
* Joshua
	* Android side
		* visual layout type stuff
	* Uploaded questionnaire excel on GitHub
		* Request check
    * Created the second page of the form on android App
		* Simple UI
		* No backend yet
		* Focusing on design UI
	* To do:
		* Add all questions and keep working on the app
		* Update layout 
		* May study up on website layout architecture: Vue Nuxt, Vuetify
* Zihao
	* Created the first questionnaire page
		* To add time picker function
		* till trying to emulate and take the token for authentication
	* To do:
		* Build in some fallback mechanisms for incompatible Android devices
		* Going to implement a standardised format to communicate with webserver

## Application Testing
Will be ready once backend (responses and communication) is resolved

## Sprint 2
* Email Michael W for specifics about Sprint 2.
* Due next Monday
* Update User stories
* No stretch goals? 
	* May be unrealistic

## Major issues
* iOS
	* iOS App inexperience in development
		* Solution options:
			* Drop it
			* Reassign people
				* Michael may jump on
			* Change expectations of app
				* Consult risk register
			* Use a PWA app
				* Difference: don’t DL from the store
				* Disadvantage:
					* Still a web app
					* Cannot access native features as well.
                * Advantages:
				    * Easy to implement
					* Has a native feel
			* Possibility of using PWA as a fail-safe if Adam comes back
			* If PWA is implemented instead
				* Taige will jump onto Android dev
			* Communicate with Adam ask what is going on
	
* Long Text Issue
    * Not displaying nicely
	* Can be fine tuned in Sprint 3
    * Can reduce font size 

* Responsive Design
	* Possible solution: choose a framework that supports responsive layout
		
* Communication between app and server (android)
	* Possible Solutions:
		* Use a HTTP library
			 * XHR library (JS, Ajax)
			* HTTP requests backend on Android app
		* Do more research
	
* Delivery of App to Users
	* Website can be easily delivered
	* Mobile apps going to be expensive
	    * Alternate Options:
			* APK link on website
			* Rely on client to distribute
            * Split the cost with team
        * Auditor says:
            * Our unit is tasked with making a working app, and deployment is beyond the unit, but can be considered by the team if they wish to take the extra step.
