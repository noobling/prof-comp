---
title: Minutes of First Meeting with Client
author: CITS 3200 Group R
date: Wednesday the 8th of August, week 32 of 2018
---

# Welcome

In attendance: 

- UWA Centre for Sleep Science [CSS]: A/Prof J Walsh [JW], Prof P Eastwood [PE], Dr K Maddison [KM]
- Group R: Mr A Chambost [AC], Mr M Dorrell [MD], Mr T Liu [TL], Mr Z Liu [ZL], Mr J Pollard [JP], Mr D Yu [DY]

Apologies: None

Absent: None

Location: Meeting Room, Centre for Sleep Science, UWA

Meeting opened: 16:10 hrs. 

# Matters arising from minutes of previous meeting

- N/A ; initial meeting.

# General business

## Requirements Gathering and Scope of Work

### Overview of current systems requiring enhancement
- [CSS] uses the standardised instrument "Consensus Sleep Diary" (as described in Carney et al, 2011), a peer-reviewed validated patient-informed survey
  - Currently outpatients complete this in their time unassisted, ideally correctly completing all 15 questions in the morning about the previous night's sleep, each day for a period of weeks

### Problems
- Compliance is suboptimal. Surveys are sometimes returned partially completed or incorrectly compiled.


### Features

#### Key feature: enter survey data 
- [CSS] Survey is specified in Carney et al., 
- [CSS] Questions Q1-10 are essential, Q11-15 would be desirable.

#### Data
- Data should be anonymised 
- Currently hand collated into an Excel document
  - The system should ideally automatically produce that Excel document
- (Anonymised) data from end users should be immediately sent to a cloud database server
  - [CSS] should be able to pull an Excel document from that data on demand
  - Fresh ongoing data should be flagged or removed, or at least quarantined separately to fully completed data from several weeks of entry
- Users can be rewarded with graphical feedback, if they wish to access it
  - No analytics back to user midway through diary, as it may influence the data
- [MD] Do you want users to be able to change data days later?
  - [CSS] No.
  - [AC] If you allow people to change data, keep timestamps of changes and retain historic data 

#### Platform
- [CSS] Ideally both iOS and Android, (web access is tertiary)
- [CSS] First iOS as all the [CSS] internal testers have iOS.

#### Voice interface
- [JW] Go for it.

#### Light Sensor
- [PE] Can the light sensor in the phone be used to gather data?
  - [ALL] **Consensus reached** that using the light sensor violates [CSS]'s sleep hygiene policy of no electronic devices in the bedroom. Hence any thought on using this sensor will only be considered further as a possible stretch goal once core functionality is delivered.

### Audience/End users
- Not children, adults.

### Constraints
- [PE] As the survey in its current form is peer-reviewed and validated, the tool must not deviate from that

## Overview of project deliverables
- [MD] Explanation of agile/scrum methodology
  - Stories: what the client wants. Stories are broken into Tasks, completed during Sprints.
- [MD] First Sprint (due Wed 22nd Aug): scope of work (**SoW**); acceptance tests; audit of skills; risk register.
  - [AC] The key input we need today from [CSS] is regarding the **SoW**, what exactly is required to be delivered. As SoW needs to be signed off by [CSS], we would give you early revisions for you to propose amendments to. Ideally this iteration process will result in a **SoW** that [CSS] approves well in advance of the formal due date.
  - [MD] Draft **SoW** will be provided to [CSS] by Wednesday next week (15th)
- [MD] Second Sprint (due 17th Sep): prototype


## Questions and Answers
- [JW] How much input are you as developers supposed to have? How much would you like to have? Because [CSS] is open to that.
  - [AC] Personal interest in voice-interface
- [PE] How will you work as group?
  - [MD] Assign tasks to subgroups
  - [AC] There is a requirement for us to shift between roles
  - [PE] You may want to use this as an opportunity to enhance skills each of you need to work on

## ACTION ITEMS

- [CSS] to provide [TEAM] with an Excel template of the currently used tabulated data structure
- [TEAM] to provide [CSS] with draft SoW by middle of next week

# Date of Next Meeting
- **[ALL]** TBC, possibly via the online tool

Meeting adjourned: 17:15 hrs. 
