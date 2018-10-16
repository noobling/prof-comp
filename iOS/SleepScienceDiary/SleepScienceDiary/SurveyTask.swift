//
//  SurveyTask.swift
//  SleepScienceDiary
//
//  Created by Michael Dorrell on 4/10/18.
//  Copyright © 2018 Michael Dorrell. All rights reserved.
//

import Foundation
import ResearchKit

private enum Identifier {
    // Task with a form, where multiple items appear on one page.
    case formStep1
    case formStep2
    case formStep3
    case formStep4
    
    //First form tasks
    case formItem01
    case formItem02
    case formItem03
    case formItem04
    case formItem05
    
    //Second form tasks
    case formItem11
    case formItem12 //Not necessarily applicable tasks 1
    case formItem13 //Not necessarily applicable tasks 1
    case formItem14 //Not necessarily applicable tasks 1
    case formItem15
    case formItem16 //Not necessarily applicable tasks 2
    
    //Third form tasks
    case formItem21
    case formItem22
    case formItem23
    case formItem24
    case formItem25 //Not necessarily applicable tasks  3
    
    //Fourth form tasks
    case formItem31
    case formItem32 //Not necessarily applicable tasks  4
    case formItem33
    case formItem34 //Not necessarily applicable tasks  5
    case formItem35
    case formItem36 //Not necessarily applicable tasks  6
    case formItem37
    
    
}

public var SurveyTask: ORKNavigableOrderedTask {
    
    //MARK: Question List
    //Form 1: Sleep Times
    let dateSleepRecord = NSLocalizedString("Date of Sleep Record", comment: "");   //01
    let timeGotInBed = NSLocalizedString("What time did you get into bed?", comment: "");   //02
    let timeAttemptedSleep = NSLocalizedString("What time did you try to go to sleep?", comment: "");   //03
    let timeOutOfBed = NSLocalizedString("What time did you get out of bed for the day?", comment: ""); //04
    let timeUntilSleep = NSLocalizedString("How long did it take you to fall asleep?", comment: "");    //05
    
    //Form 2: Sleep Awakenings
    let numAwakenings = NSLocalizedString("How many times did you wake up, not counting your final awakening?", comment: "");   //11
    let totalAwakeningTime = NSLocalizedString("In total, how long did these awakenings last?", comment: "");   //12
    let finalAwakeningTime = NSLocalizedString("What time was your final awakening?", comment: "");   //13
    let howLongSleptAfterWaking = NSLocalizedString("After your final awakening, how long did you spend in bed trying to sleep?", comment: "");   //14
    let didWakeEarly = NSLocalizedString("Did you wake up earlier than planned?", comment: "");   //15
    let howMuchEarlier = NSLocalizedString("How much earlier?", comment: "");   //16
    
    //Form 3: Sleep Quality
    let howLongSleep = NSLocalizedString("In total, how long did you sleep?", comment: "");   //21
    let sleepQuality = NSLocalizedString("How would you rate the quality of your sleep?", comment: "");   //22
    let howWellRested = NSLocalizedString("How rested or refreshed did you feel when you woke-up for the day?", comment: "");   //23
    let howManyNaps = NSLocalizedString("How many times did you nap or doze?", comment: "");   //24
    let howLongNap = NSLocalizedString("In total, how long did you nap or doze?", comment: "");   //25
    
    //Form 4: Beverages & Medicine
    let howManyAlcoholicDrinks = NSLocalizedString("How many drinks containing alcohol did you have?", comment: "");   //31
    let whenLastAlcoholicDrink = NSLocalizedString("What time was your last alcoholic drink?", comment: "");   //32
    let howManyCaffeinatedDrinks = NSLocalizedString("How many caffeinated drinks (coffee, tea, soda, energy drinks) did you have?", comment: "");   //33
    let whenLastCaffeinatedDrink = NSLocalizedString("What time was you last caffeinated drink?", comment: "");   //34
    let didTakeMedication = NSLocalizedString("Did you take any over-the-counter or presecription medication(s) to help you sleep?", comment: "");   //35
    let medicationSpecification = NSLocalizedString("Medication, dose, and time-taken e.g. Relaxo-herb, 50mg, 11pm", comment: "");   //36
    let anyComments = NSLocalizedString("Comments (if applicable)", comment: "");   //37
    
    //Additional information
    let form1Title = NSLocalizedString("Sleep Times", comment: "");
    let form2Title = NSLocalizedString("Sleep Awakenings", comment: "");
    let form3Title = NSLocalizedString("Sleep Quality", comment: "");
    let form4Title = NSLocalizedString("Beverages & Medicine", comment: "");
    
    //MARK: Custom Choices
    //Add custom options hourMinuteChoices
    let minutes = [0, 15, 30, 45]
    var hourMinuteChoices: Array<ORKTextChoice> = []
    for hour in 0...23 {
        for minute in minutes {
            let choiceText = "\(hour) hours \(minute) minutes"
            let choiceValue = "\(hour)_\(minute)"
            hourMinuteChoices.append(ORKTextChoice(text: choiceText, value: choiceValue as NSCoding & NSCopying & NSObjectProtocol))
        }
    }
    //Add custom options numTimesChoices
    var numTimesChoices: Array<ORKTextChoice> = []
    for num in 0...20 {
        let choiceNum = "\(num)"
        numTimesChoices.append(ORKTextChoice(text: choiceNum, value: num as NSCoding & NSCopying & NSObjectProtocol))
    }
    //Add custom options sleepQualityChoices
    var sleepQualityChoices: Array<ORKTextChoice> = []
    let qualityChoices: Array<String> = ["Very Poor", "Poor", "Fair", "Good", "Very Good"]
    for num in 0...(qualityChoices.count-1) {
        sleepQualityChoices.append(ORKTextChoice(text: qualityChoices[num], value: num as NSCoding & NSCopying & NSObjectProtocol))
    }
    //Add custom options restedChoices
    var restedChoices: Array<ORKTextChoice> = []
    let restChoices: Array<String> = ["Not at all", "Slightly rested", "Somewhat rested", "well-rested", "Very well-rested"]
    for num in 0...(restChoices.count-1) {
        restedChoices.append(ORKTextChoice(text: restChoices[num], value: num as NSCoding & NSCopying & NSObjectProtocol))
    }
    
    //MARK: Answer Formats Used
    let pickTime = ORKAnswerFormat.timeOfDayAnswerFormat() //Pick a time of the day
    let pickDate = ORKAnswerFormat.dateAnswerFormat(withDefaultDate: nil, minimumDate: nil, maximumDate: Date(), calendar: nil) //Pick a date
    let yesNo = ORKAnswerFormat.booleanAnswerFormat()   //Pick either 'Yes' or 'No'
    let pickHowLong = ORKAnswerFormat.valuePickerAnswerFormat(with: hourMinuteChoices)  //Pick from 0 hours 0 minutes to 23 hours 45 minutes
    let pickHowMany = ORKAnswerFormat.valuePickerAnswerFormat(with: numTimesChoices)    //Pick from 0 to 20
    let pickSleepQuality = ORKAnswerFormat.valuePickerAnswerFormat(with: sleepQualityChoices)   //Pick from 'Very Poor' sleep to 'Very Good' sleep
    let pickRestLevel = ORKAnswerFormat.valuePickerAnswerFormat(with: restedChoices)    //Pick from 'Not at all' rested to 'Very well-rested'
    let stringFormat = ORKAnswerFormat.textAnswerFormat(withMaximumLength: 40)
    stringFormat.multipleLines = false
    stringFormat.autocapitalizationType = UITextAutocapitalizationType.none
    
    
    //MARK: Survey Begins
    var steps = [ORKStep]()
    
    //MARK: Form 1: Sleep Times
    //First form
    let formStep1 = ORKFormStep(identifier: String(describing:Identifier.formStep1), title: NSLocalizedString(form1Title, comment: ""), text: "")
    
    //Generate fields
    let formItem01 = ORKFormItem(identifier: String(describing:Identifier.formItem01), text: dateSleepRecord, answerFormat: pickDate)
    let formItem02 = ORKFormItem(identifier: String(describing:Identifier.formItem02), text: timeGotInBed, answerFormat: pickTime)
    let formItem03 = ORKFormItem(identifier: String(describing: Identifier.formItem03), text: timeAttemptedSleep, answerFormat: pickTime)
    let formItem04 = ORKFormItem(identifier: String(describing: Identifier.formItem04), text: timeOutOfBed, answerFormat: pickTime)
    let formItem05 = ORKFormItem(identifier: String(describing: Identifier.formItem05), text: timeUntilSleep, answerFormat: pickHowLong)
    
    //Add form to steps
    formStep1.formItems = [
        formItem01,
        formItem02,
        formItem03,
        formItem04,
        formItem05
    ]
    steps += [formStep1]

    //MARK: Form 2: Sleep Awakenings
    //Second form
    let formStep2 = ORKFormStep(identifier: String(describing:Identifier.formStep2), title: NSLocalizedString(form2Title, comment: ""), text: "")
    
    //Generate fields
    let formItem11 = ORKFormItem(identifier: String(describing: Identifier.formItem11), text: numAwakenings, answerFormat: pickHowMany)
    let formItem12 = ORKFormItem(identifier: String(describing:Identifier.formItem12), text: totalAwakeningTime, answerFormat: pickHowLong)
    let formItem13 = ORKFormItem(identifier: String(describing: Identifier.formItem13), text: finalAwakeningTime, answerFormat: pickTime)
    let formItem14 = ORKFormItem(identifier: String(describing: Identifier.formItem14), text: howLongSleptAfterWaking, answerFormat: pickHowLong)
    let formItem15 = ORKFormItem(identifier: String(describing: Identifier.formItem15), text: didWakeEarly, answerFormat: yesNo)
    let formItem16 = ORKFormItem(identifier: String(describing: Identifier.formItem16), text: howMuchEarlier, answerFormat: pickHowLong)
    
    //Add form to steps
    formStep2.formItems = [
        formItem11,
        formItem12,
        formItem13,
        formItem14,
        formItem15,
        formItem16
    ]
    steps += [formStep2]
    
    
    //MARK: Form 3: Sleep Quality
    //Third form
    let formStep3 = ORKFormStep(identifier: String(describing:Identifier.formStep3), title: NSLocalizedString(form3Title, comment: ""), text: "")
    
    //Generate fields
    let formItem21 = ORKFormItem(identifier: String(describing: Identifier.formItem21), text: howLongSleep, answerFormat: pickHowLong)
    let formItem22 = ORKFormItem(identifier: String(describing: Identifier.formItem22), text: sleepQuality, answerFormat: pickSleepQuality)
    let formItem23 = ORKFormItem(identifier: String(describing: Identifier.formItem23), text: howWellRested, answerFormat: pickRestLevel)
    let formItem24 = ORKFormItem(identifier: String(describing: Identifier.formItem24), text: howManyNaps, answerFormat: pickHowMany)
    let formItem25 = ORKFormItem(identifier: String(describing: Identifier.formItem25), text: howLongNap, answerFormat: pickHowLong)
    
    //Add form to steps
    formStep3.formItems = [
        formItem21,
        formItem22,
        formItem23,
        formItem24,
        formItem25
    ]
    steps += [formStep3]
    
    
    //MARK: Form 4: Beverages & Medicine
    //Fourth form page
    let formStep4 = ORKFormStep(identifier: String(describing:Identifier.formStep4), title: NSLocalizedString(form4Title, comment: ""), text: "")
    
    //Generate fields
    let formItem31 = ORKFormItem(identifier: String(describing: Identifier.formItem31), text: howManyAlcoholicDrinks, answerFormat: pickHowMany)
    let formItem32 = ORKFormItem(identifier: String(describing: Identifier.formItem32), text: whenLastAlcoholicDrink, answerFormat: pickTime)
    let formItem33 = ORKFormItem(identifier: String(describing: Identifier.formItem33), text: howManyCaffeinatedDrinks, answerFormat: pickHowMany)
    let formItem34 = ORKFormItem(identifier: String(describing: Identifier.formItem34), text: whenLastCaffeinatedDrink, answerFormat: pickTime)
    let formItem35 = ORKFormItem(identifier: String(describing: Identifier.formItem35), text: didTakeMedication, answerFormat: yesNo)
    let formItem36 = ORKFormItem(identifier: String(describing: Identifier.formItem36), text: medicationSpecification, answerFormat: stringFormat)
    let formItem37 = ORKFormItem(identifier: String(describing: Identifier.formItem37), text: anyComments, answerFormat: stringFormat)
    
    //Add form to steps
    formStep4.formItems = [
        formItem31,
        formItem32,
        formItem33,
        formItem34,
        formItem35,
        formItem36,
        formItem37
    ]
    steps += [formStep4]
    
    //MARK: Summary Step
    let summaryStep = ORKCompletionStep(identifier: "SummaryStep")
    summaryStep.title = "Sleep data successfully recorded"
    summaryStep.text = "That was easy!"
    steps += [summaryStep]
    
    return ORKNavigableOrderedTask(identifier: "SurveyTask", steps: steps)
}


