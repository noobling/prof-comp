#General Scope of Work Document

## 1.0 General Goals
The general goal of this project is to replace the pen-and-paper tables currently used for sleep self-monitoring with a mobile application that can record the user data and send it to the clinicians and researchers.
This system must be able to:
* Receive user input from the application of each user anonymously
* Send the data to a server database
* Allow clinicians to access the data as an excel spreadsheet

## 2.0 Proposed System
	### 2.1 Overview
	The system will consist of two components - the application itself and a cloud-based server running an SQL database.
		### 2.1.1 Application
		The application will work on both iOS and android devices. Each user will have an account with no details that could be possibly linked to their identity (Only unique username and password). The application will allow users to input their sleep data daily using the CSD questionnaire. This data will then be sent to the server for storage and processing.
		### 2.2.1 Server [Zihao, can you add more detail here]
		The server will be cloud-based and will receive sleep data from each user. Researchers will be able to download this data as an excel spreadsheet for analysis. The cloud-based server is achieved by webservice which is implemented by C#. The webservice can achieve the interaction between mobile applications and servers which including: 1) receive requests from the mobile phone and feedback the results (verify login). 2) receive the data transmitted by the mobile phone and store it to the database on the server side. 3) send information to the mobile phone (loading user's history data). Our server is AWS cloud server, mainly used to store user data.
	
	### 2.2 Functional Requirements
		**Questionnaire**
		The questionnaire will use the same questions as the Consensus Sleep Diary-M table written using java. Submission of invalid or blank data will highlight the error and request it be fixed before proceeding.
		
		**User Accounts**
		The user accounts will be set up using a unique user-chosen username, a user-chosen password and an email address (in case they forget their password) [If this is a feasible addition]. If the username is already taken, they will be prompted to choose another. The account is only used to ensure where their individual data is stored and isn't attached to their identity.
		Admin accounts will also be implemented and used to receive the data of users. Admin account is designed for researcher to easy analysis user's questionnaire data on their phone.
		
		**Local database** [If feasible]
		A local database will be stored on the phone containing user data before it is sent to the cloud-server. When user send one sleep record to server, this record is also saved in the mobile phone database. These local data is used for data visual display.
		
		
		**SQL Server**
		Used to store the data of each user in separate tables.
		
		**Excel Spreadsheet Format**
		The tables will be converted into excel files upon request and sent to the requesting admin.
		
		**Webservice**
		Used to connect the application to the cloud-server
		
	### 2.3 Non-Functional Requirements
		
		#### 2.3.1 User Interface and Human Factors
		The user interface will be constructed using XML file. We expect technological novices to use the sleep diary so we aim to make this side especially user friendly by including a tutorial upon making an account [if possible, using example answers]. There will also be safeguards against user-error by checking the input data is valid e.g. Time asleep cannot be greater than 24 hours.
		The admin accounts are given higher expectations of technological ability in accessing the data, however we will realistically need to create documentation for how to use this more complex side. [Must include how data is received]
		
		#### 2.3.2 Documentation
			##### 2.3.2.1 User Documentation
			This will be available to the sleep diary users of the application and will demonstrate in greater detail than the tutorial [if implemented] how to use the application.
			
			##### 2.3.2.2 Admin Documentation
			This will only be available on the admin accounts and will go into depth about how to use the admin features of the application.
			
			##### 2.3.2.3 Code Documentation
			This will be located with the server files and will describe the inner workings of the entire system for future maintenance.
		
		#### 2.3.3 Security Issues
		[TODO Update this]
		* SQL injection attacks
		* User data privacy
		* Admin account security
		* Encryption of data in transit (Despite low risk of interception)
		
		####2.3.4 Hardware Consideration
		The main consideration on hardware is the system version of mobile device. The app might not work on a old version of mobile system like below IOS 8 or Android 4.0
		
		####2.3.5 Error Handling and Extreme Conditions
		[TODO Update this]
		* Internet connect error. 
		  Solve: ask for internet authorization before launch the app.
		* Local database occupy large space.
		  Solve: clear cache
		
	### 2.4 Constraints
		#### 2.4.1 Time
		There are only 8 weeks [I think] in total to work on this project. Due to this we must avoid scope creep as much as possible and eliminate redundancies by ensuring we know what the client wants delivered.
		
		#### 2.4.1 Money
		We have no budget.
		
		#### 2.4.1 Experience
		Our team lacks experience in working together, in working on software projects and in project management.
	
	### 2.5 System Model [Or is it a mobile-server relationship?]
	The model we have chosen is a 2 level client-server relationship. The client being the application, which stores data on the server and then receives it back once it has been aggregated into an excel spreadsheet.
		#### 2.5.1 Scenarios
		[TODO Scenarios in which people might use the application]
