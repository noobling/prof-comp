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

public var SurveyTask: ORKOrderedTask {
    
    //MARK: Question List
    let dateSleepRecord = NSLocalizedString("Date of Sleep Record", comment: "");   //01
    let timeGotInBed = NSLocalizedString("What time did you get into bed?", comment: "");   //02
    let timeAttemptedSleep = NSLocalizedString("What time did you try to go to sleep?", comment: "");   //03
    let timeOutOfBed = NSLocalizedString("What time did you get out of bed for the day?", comment: ""); //04
    let timeUntilSleep = NSLocalizedString("How long did it take you to fall asleep?", comment: "");    //05
    
    let numAwakenings = NSLocalizedString("How many times did you wake up, not counting your final awakening?", comment: "");   //11
    let totalAwakeningTime = NSLocalizedString("In total, how long did these awakenings last?", comment: "");   //12
    let finalAwakeningTime = NSLocalizedString("What time was your final awakening?", comment: "");   //13
    let howLongSleptAfterWaking = NSLocalizedString("After your final awakening, how long did you spend in bed trying to sleep?", comment: "");   //14
    let didWakeEarly = NSLocalizedString("Did you wake up earlier than planned?", comment: "");   //15
    let howMuchEarlier = NSLocalizedString("How much earlier?", comment: "");   //16
    
    let howLongSleep = NSLocalizedString("In total, how long did you sleep?", comment: "");   //21
    let sleepQuality = NSLocalizedString("How would you rate the quality of your sleep?", comment: "");   //22
    let howWellRested = NSLocalizedString("How rested or refreshed did you feel when you woke-up for the day?", comment: "");   //23
    let howManyNaps = NSLocalizedString("How many times did you nap or doze?", comment: "");   //24
    let howLongNap = NSLocalizedString("In tota, how long did you nap or doze?", comment: "");   //25
    
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
    
    //MARK: Answer formats used
    let pickTime = ORKAnswerFormat.timeOfDayAnswerFormat()
    let pickDate = ORKAnswerFormat.dateAnswerFormat(withDefaultDate: nil, minimumDate: nil, maximumDate: Date(), calendar: nil)
    let pickHowLong = ORKAnswerFormat.valuePickerAnswerFormat(with: hourMinuteChoices)
    let pickHowMany = ORKAnswerFormat.valuePickerAnswerFormat(with: numTimesChoices)
    
    
    //MARK: Survey begins
    var steps = [ORKStep]()
    
    //MARK: Form 1: Sleep Times
    //First form page: Sleep Times
    let formStep1 = ORKFormStep(identifier: String(describing:Identifier.formStep1), title: NSLocalizedString(form1Title, comment: ""), text: "")
    
    //First field, for entering a date.
    let formItem01Text = NSLocalizedString(dateSleepRecord, comment: "")
    let formItem01 = ORKFormItem(identifier: String(describing:Identifier.formItem01), text: formItem01Text, answerFormat: pickDate)
    
    //Second field, for entering a time interval.
    let formItem02Text = NSLocalizedString(timeGotInBed, comment: "")
    let formItem02 = ORKFormItem(identifier: String(describing:Identifier.formItem02), text: formItem02Text, answerFormat: pickTime)
    
    //Third field,  for entering a time interval.
    let formItem03Text = NSLocalizedString(timeAttemptedSleep, comment: "")
    let formItem03 = ORKFormItem(identifier: String(describing: Identifier.formItem03), text: formItem03Text, answerFormat: pickTime)
    
    //Fourth field,  for entering a time interval.
    let formItem04Text = NSLocalizedString(timeOutOfBed, comment: "")
    let formItem04 = ORKFormItem(identifier: String(describing: Identifier.formItem04), text: formItem04Text, answerFormat: pickTime)
    
    //Fifth field,  for entering a time amount.
    let formItem05Text = NSLocalizedString(timeUntilSleep, comment: "")
    let formItem05 = ORKFormItem(identifier: String(describing: Identifier.formItem05), text: formItem05Text, answerFormat: pickHowLong)
    
    formStep1.formItems = [
        formItem01,
        formItem02,
        formItem03,
        formItem04,
        formItem05
    ]
    steps += [formStep1]

    //MARK: Form 2: Sleep Awakenings
    //Second form page: Sleep Awakenings
    let formStep2 = ORKFormStep(identifier: String(describing:Identifier.formStep2), title: NSLocalizedString(form2Title, comment: ""), text: "")
    
    //First field, for entering an amount.
    let formItem11Text = NSLocalizedString(numAwakenings, comment: "")
    let formItem11 = ORKFormItem(identifier: String(describing: Identifier.formItem11), text: formItem11Text, answerFormat: pickHowLong)
    
    //Second field, for entering a time amount.
    let formItem12Text = NSLocalizedString(totalAwakeningTime, comment: "")
    let formItem12 = ORKFormItem(identifier: String(describing:Identifier.formItem12), text: formItem12Text, answerFormat: pickTime)
    
    //Third field,  for entering a time interval.
    let formItem13Text = NSLocalizedString(finalAwakeningTime, comment: "")
    let formItem13 = ORKFormItem(identifier: String(describing: Identifier.formItem13), text: formItem13Text, answerFormat: pickTime)
    
    //Fourth field,  for entering a time interval.
    let formItem14Text = NSLocalizedString(howLongSleptAfterWaking, comment: "")
    let formItem14 = ORKFormItem(identifier: String(describing: Identifier.formItem14), text: formItem14Text, answerFormat: pickTime)
    
    //Fifth field,  for entering a time interval.
    let formItem15Text = NSLocalizedString(didWakeEarly, comment: "")
    let formItem15 = ORKFormItem(identifier: String(describing: Identifier.formItem15), text: formItem15Text, answerFormat: pickHowLong)
    
    //Sixth field,  for entering a time interval.
    let formItem16Text = NSLocalizedString(howMuchEarlier, comment: "")
    let formItem16 = ORKFormItem(identifier: String(describing: Identifier.formItem16), text: formItem16Text, answerFormat: pickHowLong)
    
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
    
    
    //MARK: Form 4: Beverages & Medicine
    
    
    //MARK: Summary Step
    let summaryStep = ORKCompletionStep(identifier: "SummaryStep")
    summaryStep.title = "Sleep data successfully recorded"
    summaryStep.text = "That was easy!"
    steps += [summaryStep]
    
    return ORKOrderedTask(identifier: "SurveyTask", steps: steps)
}


