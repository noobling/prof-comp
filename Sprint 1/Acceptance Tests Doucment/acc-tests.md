---
title: Acceptance Test Document
author: CITS3200 Group R
---

## Objectives

This document is designed to describe the conditions under which we can consider the project completed. It cannot be fully comprehensive because we anticipate the final product will contain features beyond those described here, but it describes the essential features for the sleep diary to be considered complete. Due to this the document describes the minimum final product to be delivered, with the expectation that future documentation will supersede it.

## Test Summary

The system is a sleep diary app for iOS and Android devices. The app takes user input about their sleep patterns and uploads it to a SQL database where it is converted to an excel spreadsheet and sent to their clinician upon request. Further details are available in the General Scope of Work document.

## Testing Strategy

For the system to be considered functional there are several subsystems that must be functional and correctly linked:

* iOS app
* Android App
* Server database
* Webservice

The individual subsystems will be tested based on function, performance and user interactability. Function can be tested through interaction with the subsystems and attempting many types of inputs. Performance will be tested by calculating how quickly the subsystem can perform tasks and how many users it can handle. User interactibility will need to be tested by external people for ease of use and verified by the client.

## Subsystems to be tested

### iOS App

The iOS app must be able to:

* Recieve user input correctly
    * Ensure input is valid
    * Ensure all info is filled in
* Differentiate users
* Send user data to the server
* Save user data locally
* Visually display user data

### Android App

The Android app must be able to:

* Recieve user input correctly
    * Ensure input is valid
    * Ensure all info is filled in
* Differentiate users
* Send user data to the server
* Save user data locally
* Visually display user data

### Server database

The server database must be able to:

* Recieve user data
    * Must be resistent to SQL injection attacks
* Store user data in a SQL table
    * Must differentiate between users
    * Must only update once per day
* Convert SQL data into excel spreadsheet
* Verify and send authorised data to clinicians/researchers

### Webservice [I really don't know what this does]

The webservice links the apps to the server database. To do this it must:

* Form a connection between mobile device and server


## Test A

Login test on Android device

* Test Specification

The login test should take a code (given by clinician/researcher) as an input into a text box. If the code is valid, the app will jump to personal page. Else, it should display an error message.

* Test Description
   * Location of test:(I'm not sure what this is)
   * Means of Control: Data will enter manually since our valid code will be long and unique there is no point to generate random number automatically as input.
   * Data
      input value will be either valid and invalid code. The output data will be a function that return 'true' for authenticated, 'false' for wrong password or return 'time out' for bad internet connection. System message are those return values and will displayed on android studio console.
* Procedures
   private String result;
   public void testLogin(String code)throws Exception{
      try{
         /*
            call the login function here...
            login function should take a String(code) as input and return true or false for result
         */
      }catch(Exception e){
         e.printStackTrace(); //error message
         if(e.equals('timeout')){
            result='timeout'
         }
      }
      log.d('login test message is: ',result); //display on system console
   }
* Test Analysis Report
   [TODO Description of results]
   
## Test B

Data send test on Android device

* Test Specification

The Data send test should first check all data is valid and all required fields are filled in. If some data is invalid or missing, the mobile phone must alert user and not send data to server side. If the data is correct then it submit to the server and receive a success message. If the mobile phone doesn't receive the success message in 5-10 second. It will cancel the sending process and retuen a 'time out' message indicate submission failure.

* Test Description
   * Location of test:(I'm not sure what this is)
   * Means of Control: Data can entered automatically by random() function and a ArrayList<> contatin different types of values(i.e int, String, Boolean, Void). These values can filled efficiently into different fields to check if the validating function work well
   * Data
    * input Arraylist Data Sample:('8/9/2018' , 'I didn't sleep well' , 10 , '' , false)
    * input command:
      private EditText inputdata=(EditText)findViewById(R.id.field);
      ArrayList<> Myarray = new ArrayList<>();
      Myarray.add(...) //Add Sample values in arraylist
      inputdata.setvalue(Myarray(Random().nextInt(4)));
      //then call submit_to_server function
    * Output Data: Output data should be either 'true', 'false' or 'time out' to determine which scenario is.
   * Procedures
      Same method as Test A
* Test Analysis Report
   [TODO Description of results]
    
