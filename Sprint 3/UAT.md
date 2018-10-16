# User Acceptance Test final

Core UAT tests represent features that needed to be completed for client. Additional UAT tests represent optional features completed for the client as a bonus.

## UAT Scope (Core) - User
* Using application located here: https://sleepdiaryapp.herokuapp.com/
* Creating an account
* Logging into an account
* Logging out of an account
* Creating a sleep record
* Updating a sleep record
* Viewing a list of sleep records
* Viewing help page

## UAT Scope (Additional) - User
* Viewing graphs
* Sending an email invitation
* Deleting a sleep record
* Pre fill sleep record 
* Forgot password

## UAT Scope (Core) - Researcher
* Retrieving user sleep records in excel format
* Updating another user's sleep record
* Deleting another user's sleep record

## UAT Scope (Additional) - Researcher
* Viewing graphs of another user

## UAT Scope (Core) - User on mobile
* Everything listed under User UAT scope
* Viewing tool tips

## Assumptions and constraints
* Tested on a modern device using a modern browser
* IE is not used 
* Tester has basic comprehensive of English
* Tester has moderate familiarity using modern websites

## UAT Risks
| Risk                         | Probability | Impact | Mitigation                                                              |
|------------------------------|:-----------:|-------:|-------------------------------------------------------------------------|
| Inadequate testers           |     Low     |   High | Screen tester to ensure they have right skill set.                      |
| UAT test failure             |     Low     |   High | Features have passed automated tests in Travis CI                       |
| Inadequate hardware/software |    Medium   |   High | Ensure testers read the assumptions and constraints section of document |

## UAT Test Results
### UAT (Core) - User
| Test Case                                                                                                             |                         Expected Result                         | Pass/Fail |
|-----------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------:|----------:|
| **Registration**  1. Click on register button  2. Enter valid details  3. Click submit button                            |      1. Directed to user home page  2. User account created     |           |
| **Logging out** 1. Click on user image in top right 2. Click on logout in dropdown                                        |        1. Directed to landing page 2. User is logged out        |           |
| **Logging in**  1. Click on login button  2. Enter valid login credentials  3. Click submit button                        |       1. Directed to user home page  2. User is logged in       |           |
| **Creating Sleep Record** 1. Click on "new sleep record" navigation link 2. Enter valid sleep record data 3. Click submit | 1. Directed to sleep journal 2. New sleep record is created     |           |
| **Updating Sleep Record** 1. Click on the edit button (Looks like a pencil) 2. Make changes 3. Click submit               | 1. Directed to sleep journal 2. Sleep record is updated         |           |
| **Viewing Sleep Records** 1. Click on home button 2. Click on "Sleep Journal" navigation link                             | 1. Directed to sleep journal 2. All sleep records are displayed |           |
| **Viewing Help Page** 1. Click on home button 2. Click on "Help" navigation link                                          | 1. Directed to help page 2. Can view helpful information        |           |

### UAT (Additional) - User
| Test Case                                                                                                                  |                   Expected Result                  | Pass/Fail |
|----------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------:|----------:|
| **Viewing graphs** Click on home button. Click on "Visualisations" navigation link                                         |  Directed to visualisations with relevant graphs.  |           |
| **Sending email invitation** Click on home button. Click on "invite" navigation link. Type desired email and click send    |  Email invite is sent. Potentially in spam folder. |           |
| **Deleting sleep record** Click on sleep journal button. Click on "bin" icon. Confirm deletion.                            |        Deleted sleep record no longer exists.       |           |
| **Pre fill sleep record data** Assuming a sleep record has already been created. Click "new sleep record" navigation link. | Sleep record creation page has data already there. |           |
| **Reset Password** Click on login button. Click on Forgot Password button. Type in a valid email that has account associated. Click submit. Go to email inbox and click "Reset Password". Enter new password and click submit. Attempt to login with new password | User can login with new password |  |

### UAT (Core) - Researcher
| Test Case                                                                                                                                          |                            Expected Result                            | Pass/Fail |
|----------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------:|----------:|
| **Retrieving sleep records in excel format** Click on patients button. Click on "cloud" icon.                                                      | Excel file is downloaded containing all sleep records for given user. |           |
| **Updating another users sleep record** Click on patients button. Click on user icon/image. Click on "pencil" button then make changes and submit. |     Directed to given user sleep journal. Changes made are saved.     |           |
| **Deleting another users sleep record** Click on patients button. Click on user icon/image. Click on "bin" icon".                                  |                 Deleted sleep record no longer exists                 |           |

### UAT (Additional) - Researcher
| Test Case                                                                          |           Expected Result           | Pass/Fail |
|------------------------------------------------------------------------------------|:-----------------------------------:|----------:|
| **Viewing another user's graphs** Click on patients button. Click on "graph" icon. | Graphs of given user are displayed. |           |

### UAT - Mobile
| Test Case                                                                                                                 |                      Expected Result                      | Pass/Fail |
|---------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------:|----------:|
| **Mobile application behaves similar to web application** Go through a normal flow creating and updating a sleep records. | Mobile application can do everything web application can. |           |
| **Can view tool tip** Go to user home page. Click "new sleep record". Click on the "info" icon.                           | Text is displayed showing entire question on screen.      |           |

## Tester Certification

Name: 

Date:

Signature:___________________________________