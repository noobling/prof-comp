# General Scope of Work Document

## 1.0 General Goals
The general goal of this project is to replace the pen-and-paper tables currently used for sleep self-monitoring with a mobile application that can record the user data and send it to the clinicians and researchers.
This system must be able to:
- Receive user input from the application of each user anonymously
- Send the data to a server database
- Allow clinicians to access the data as an excel spreadsheet
    
## 2.0 Proposed System
### 2.1 Overview
The system will consist of two components: The application itself and a cloud-based server running an SQL database.
#### 2.1.1 Application
The application will work on both iOS and android devices. Each user will have an account with no details that could be possibly linked to their identity (Only unique username and password). The application will allow users to input their sleep data daily using the CSD questionnaire. This data will then be sent to the server for storage and processing.
#### 2.2.1 Server
The server will be cloud-based and will receive sleep data from each user. Researchers will be able to download this data as an excel spreadsheet for analysis. The cloud-based server is achieved by webservice which is implemented using C#. Our server is an AWS cloud server, mainly used to store user data.
The webservice provides the interaction between the mobile application and server:
* Receives requests from the mobile phone and verifies login
* Receives the data transmitted by the mobile device and stores it to the database on the server side
* Sends information to the mobile device (loading user's history data)
### 2.2 Functional Requirements
**Questionnaire**
The questionnaire will use the same questions as the Consensus Sleep Diary-M table written using java. Submission of invalid or blank data will highlight the error and request it be fixed before proceeding.
**User Accounts**
The user accounts will be set up using a unique user-chosen username, a user-chosen password and an email address (in case they forget their password). If the username is already taken, they will be prompted to choose another. The account is only used to ensure where their individual data is stored and isn't attached to their identity.
Admin accounts will also be implemented and used to receive the data of users. The admin accounts are designed for researchers to download the user data.
**Local database**
A local database will be stored on the phone containing user data before it is sent to the cloud-server. When user send one sleep record to server, this record is also saved in the mobile phone database. These local data is used for data visual display.
**SQL Server**
Used to store the data of each user in separate tables.
**Excel Spreadsheet Format**
The tables will be converted into excel files upon request and sent to the requesting admin.
**Webservice**
Used to connect the application to the cloud-server.
### 2.3 Non-Functional Requirements
#### 2.3.1 User Interface and Human Factors
The user interface will be constructed using XML. We expect technological novices to use the sleep diary so we aim to make this side especially user friendly by including a tutorial upon making an account [the tutorial may be a stretch goal]. There will also be safeguards against user-error by checking the input data is valid e.g. Time asleep cannot be greater than 24 hours.
The admin accounts are given higher expectations of technological ability in accessing the data, however we will realistically need to create documentation for how to use this more complex side.
#### 2.3.2 Documentation
##### 2.3.2.1 User Documentation
This will be available to the sleep diary users of the application and will demonstrate in greater detail than the tutorial how to use the application.
##### 2.3.2.2 Admin Documentation
This will only be available on the admin accounts and will go into depth about how to use the admin features of the application.
##### 2.3.2.3 Code Documentation
This will be located with the server files and will describe the inner workings of the entire system for future maintenance.
#### 2.3.3 Security Issues
* SQL injection attacks
* User data privacy
* Admin account security
* Encryption of data in transit (Despite low risk of interception)
#### 2.3.4 Hardware Consideration
The main consideration on hardware is the system version of mobile device. The app might not work on an old OS like below IOS 8 or Android 4.0. However we will assume users are using a more recent release.
#### 2.3.5 Error Handling and Extreme Conditions
* Internet connect error. 
Solution: Ask for internet authorization before launch the app.
* Local database occupy large space.
Solution: Alear cache.
### 2.4 Constraints
#### 2.4.1 Time
There are only 8 weeks scheduled to complete on this project. Due to this we must avoid scope creep as much as possible and eliminate redundancies by ensuring we know what the client wants delivered.
#### 2.4.1 Money
We have no budget.
#### 2.4.1 Experience
		Our team lacks experience in working together, in working on software projects and in project management.
### 2.5 System Model
The model we have chosen is a 2 level client-server relationship. The client being the application, which stores data on the server and then receives it back once it has been aggregated into an excel spreadsheet. A graphical representation of the model is available in the UML_model.png file.
#### 2.5.1 Scenarios
##### 2.5.1.1 Account Creation
User will first create their own account (user name and password) and will need to verify this with an email. These are required because each user must have a unique anonymous identifier (user name) which only they can access (using a password). The email address is required so that a password reset link can be sent to the user in case they forget their password.
##### 2.5.1.2 Sleep Diary User
After user login, the home page which contains user history data at middle, navigation tools at left side including 'New sleep diary entry'. The user can start a new entry by fill in the questionnire on mobile phone. After the questionnire is complete, it will be submitted to the server via a webservice port and the data will be saved in server side SQL database. The data will also be saved in a local database on the mobile device, which can be viewed visually as a chart or graph.
##### 2.5.1.3 Researcher Users
???