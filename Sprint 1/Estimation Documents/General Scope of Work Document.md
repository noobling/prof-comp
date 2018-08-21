# General Scope of Work for Sleep Diary App

## 1.0 General Goals
The general goal of this project is to replace the pen-and-paper tables currently used for sleep self-monitoring with a mobile application that can record the user data and send it to the clinicians and researchers.
This system must be able to:

* Receive user input from the application of each user anonymously
* Send the data to a server database
* Allow clinicians to access the data as an excel spreadsheet

## 2.0 Proposed System

### 2.1 Overview
The system will consist of two components: The application itself and a cloud-based server running a database.

#### 2.1.1 Application
The application will work on both iOS and android devices. Each user will have an account attatched to a keycode given to them  by their clinician or a researcher when they sign up. Alternatively, casual users will have a randomly generated keycode that they may or may not agree to share with all researchers in the terms and conditions. This method will ensure that only authorised clinicians or researchers will have access to their data. The application will allow users to input their sleep data daily using the CSD questionnaire. This data will then be sent to the server for storage and processing.

#### 2.1.2 Server
The server will be cloud-based and will receive sleep data from each user. Researchers and clinicians will be able to download this data as an excel spreadsheet for analysis.


### 2.2 Functional Requirements
**Questionnaire**

The questionnaire will have the same format as the Consensus Sleep Diary-M table due to it being the standardised method in the field of sleep study research. Submission of invalid or blank data will highlight the error and request it be fixed before proceeding to ensure data integrity.

**User Accounts**

The user accounts will be set up using a unique number assigned to them by someone with an admin account (researcher or clinician). The user account is only used to store their individual data in the correct table in the database and it is not attached to their identity.
Admin accounts will also be implemented and used to receive the data of users. The admin accounts are designed for researchers and clinicians so that they can only download the data of users who have consented to have their data shared.

**Local database**

A local database will be stored on the phone containing user data even after it is sent to the server. The local data is used for visually displaying their recent data so users can track their sleep patterns.

**SQL Server**

Used to store the data of each user in separate tables.

**Excel Spreadsheet Format**

The tables will be converted into excel files upon request and sent to the requesting admin.

**Webservice**

Used to connect the application to the cloud-server.

### 2.3 Non-Functional Requirements

#### 2.3.1 User Interface and Human Factors
The user interface will be constructed using XML. We expect technological novices to use the sleep diary so we aim to make this side especially user friendly by including a tutorial upon making an account. There will also be safeguards against user-error by checking the input data is valid e.g. Time asleep cannot be greater than 24 hours.
Admin users are given higher expectations of technological ability in accessing the data, however we will still need to create clear documentation for how to use this more complex account.

#### 2.3.2 Documentation

##### 2.3.2.1 User Documentation
This will be available to the sleep diary users of the application and will demonstrate in greater detail than the tutorial how to use the application.

##### 2.3.2.2 Admin Documentation
This will only be available on the admin accounts and will go into depth about how to use the admin features of the application.

##### 2.3.2.3 Code Documentation
This will be located with the server files and will describe the inner workings of the entire system for future maintenance.

#### 2.3.3 Security Considerations

* User data privacy
* Admin account security
* Encryption of data in transit (Despite low risk of interception)

#### 2.3.4 Hardware Considerations
The main consideration on hardware is the system version of mobile device. The app might not work on an old OS like below IOS 8 or Android 4.0. However we will assume users are using a more recent release.

### 2.4 Constraints

#### 2.4.1 Time
There are only 8 weeks scheduled to complete on this project. Due to this we must avoid scope creep as much as possible and eliminate redundancies by ensuring we know what the client wants delivered.

#### 2.4.2 Money
We have no budget for this project. If the client wants the app to be available on the iOS app store and google play store, it will require a developer account which costs a moderate sum of money. Alternatively UWA departments may already have access to apple and android developer accounts.

#### 2.4.3 Experience
Our team lacks experience in working together, in working on software projects and in project management collectively. However we have subject matter experts in the fields of server design, iOS app design and android app design.

### 2.5 System Model
The model we have chosen is a 2 level client-server relationship. The client being the application, which stores data on the server and then receives it back once it has been aggregated into an excel spreadsheet.



#### 2.5.1 Scenarios

##### 2.5.1.1 Account Creation
The user will initially login using the unique keycode provided to them by their clinician or researcher. After this they will remain permanently logged in.

Alternatively, a user not affiliated with any clinician or researcher will have a unique keycode generated by the app and will be asked if they want to share their data anonymously with researchers. If yes all researchers can access this person's data, else the data will still be stored on the server but no admin account will be able to access it.

##### 2.5.1.2 Sleep Diary User
The user will be directed to the home screen, which contains 'user history data' section and navigation tools including 'New sleep diary entry'. The user can start a new entry by filling in the questionnaire on their mobile device. After the questionnaire is complete, it will be sent to the server for storage. The data will also be saved in a local database on the mobile device, which can be viewed visually as a chart or graph.

##### 2.5.1.4 Admin Users
Researchers and clinicians can log in using their admin account through a website and download the excel spreadsheets directly onto their computer. They can also generate keycodes using their account to give to patients so their data is accessible by them.
