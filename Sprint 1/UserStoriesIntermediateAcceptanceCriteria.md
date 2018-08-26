# User stories & Intermediate acceptance criteria

These are the features in the perspective of the user that we will aim to implement by the end of the next sprint. By no means is this list the complete list of features we wish to implement. We understand that there are still critical parts that need to be added for example an authentication system for researchers to use to access their accounts. But for the next sprint we believe this list is appropriate.

## User of sleep diary app stories

* As a user I am able to log on the app and create a new sleep record so that I can record my sleep history.

* As a user I can view my past sleep diary records so I can get a sense of how much information I have entered and what my sleep schedule looks like.

* As a user I can edit my most recent sleep records in order to correct any mistakes I have made.

* As a user I can delete my most recent sleep record/s in order to remove an erroneous record.

* As a user I can view my sleep diary record in a graphical form because I find that easier to comprehend over textual form.

* As a user I want my personal data e.g. name, code, email to be kept safe from unauthorised parties.

* As a user I want to be able to access the app on any of my devices because I will find this convenient.

* As a user I want the interface of the app to be easy to use and understand because I don't want to spend a lot of time learning the app

## Researcher stories

* As a researcher I want to be able to download all my patients sleep data.

* As a researcher I want the data I download to be in a excel format because I understand how to utilise data in a excel format.

* As a researcher I want to be able to access the data I want anytime so that I can do my research without having to wait for data I need.

* As a researcher I want to be able to view all my patients using the sleep diary so I can get a sense of everyone participating in my research and to also chase up people who need to use the sleep diary.

* As a researcher I want to be able to invite someone through email to use the app so that I can easily direct my patients to the app.

## Intermediate acceptance criteria

* The user can enter their code in one of the the apps
* There is a form that can be filled out to record a sleep diary record and the form should be the Consensus Sleep Diary-M table.
* The sleep diary records are stored indefinitely on a MYSQL database located in the cloud.
* The sleep diary records can only be accessed by the user that created it and the researcher who has that user as their patient.
* Only a researcher can download a user's sleep diary. That user also has to be a patient of the researcher's
* The data a researcher downloads should be in excel format.
* There is a way to edit and delete sleep diary records and only users who created the record and researcher can do that.
* All sensitive data is securely stored and only accessed by appropriate people:
    * Names and emails can only be viewable to the user which the account belongs to and their researcher
    * Codes are only viewable by the user which the code represents and the researcher who assigned them the code
* There is a way to invite users to use the app through sending them an email
* The app will be available on a website and can also be accessed on a mobile device by directly transfering the mobile app
* The interface to use the app should be simple to use and intuitive with minimal instructions needed
