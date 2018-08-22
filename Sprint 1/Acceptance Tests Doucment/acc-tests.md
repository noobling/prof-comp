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

### iOS/Android App Tests
*iOS and Android users have been considered the same because they require the same features.

#### Log In Users
Type of user trying to log in:

| Input | Output expected |
| :---: | :---: |
| New user with keycode | Logs in permanently |
| New user without keycode | Logs in permanently, generates keycode for table and asks to share data with researchers |
| Previous user | Logs in automatically |

#### Receive user input correctly
Input cases to test for:

| Input | Output expected |
| :---: | :---: |
| Input is valid | Save to local database and send to server |
| Input is invalid | Request user re-enters data |
| Not all info is filled in | Request user re-enters data |    
    
#### Differentiate users

Must be able to service multiple simultaneous users.

#### Send user data to the server
Type of data sent:

| Input | Output expected |
| :---: | :---: |
| Data is valid | Save to users table |
| Data is invalid | Log error |

#### Save user data locally

Data is saved to a table to be used for visualization of data.

#### Visually display user data

Cases of data to show

| Input | Output expected |
| :---: | :---: |
| Previously entered data | Display data |
| No data has been entered | Give a message suggesting inputting data |

### Server database

#### Receive user data
Type of data received:

| Input | Output expected |
| :---: | :---: |
| Data is valid | Save to users table |
| Data is invalid | Log error |
| 'Comment' section attempts a SQL injection attack | Sanitise input |

#### Store user data in a SQL table
Type of data:

| Input | Output expected |
| :---: | :---: |
| Same user tries to input twice in a day | Save most recent data |
| User not found in table | Create new table and save data |

#### Convert SQL data into excel spreadsheet
Type of data:

| Input | Output expected |
| :---: | :---: |
| Valid data of table | Excel file version of table |
| Invalid data of table | Error message and log error |

#### Verify and send authorised data to clinicians/researchers
Type of user attempting:

| Input | Output expected |
| :---: | :---: |
| Researcher | Data sent as excel file |
| Clinician | Choice of 'simple' or 'full' data sent as an excel file |
| Unauthorized user | Access denied |

### Webservice

The webservice receive the information from apps and parse at server side then save to server database. To do this it must:

#### deploy to server 

Must be able to deploy 24 hour

#### receive XML file from Android device
Type of method:

| Input | Output expected |
| :---: | :---: |
| Valid login code | True |
| Invalid login code | False |
| User input data | Data received |

#### parse XML flie at server side 
 
This is a function that transfer XML code into String. The way to test this is just check if the output String is making sense
