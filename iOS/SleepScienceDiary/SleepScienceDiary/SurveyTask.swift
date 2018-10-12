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
    case formStep
    
    //First form tasks
    case formItem01
    case formItem02
    case formItem03
    case formItem04
    case formItem05
    
    //Second form tasks
    case formItem11
        //Not necessarily applicable tasks
        case formItem12
        case formItem13
        case formItem14
        //END
    case formItem15
        //Not necessarily applicable task
        case formItem16
        //END
    
    //Third form tasks
    case formItem21
    case formItem22
    case formItem23
    case formItem24
        //Not necessarily applicable task
        case formItem25
        //END
    
    //Fourth form tasks
    case formItem31
        //Not necessarily applicable task
        case formItem32
        //END
    case formItem33
        //Not necessarily applicable task
        case formItem34
        //END
    case formItem35
        //Not necessarily applicable task
        case formItem36
        //END
    case formItem37
    
    
}

public var SurveyTask: ORKOrderedTask {
    
    //MARK: Question List
    let dateSleepRecord = NSLocalizedString("Date of Sleep Record", comment: "");
    let timeGotInBed = NSLocalizedString("What time did you get into bed?", comment: "");
    let timeAttemptedSleep = NSLocalizedString("What time did you try to go to sleep?", comment: "");
    let timeOutOfBed = NSLocalizedString("What time did you get out of bed for the day?", comment: "");
    let timeUntilSleep = NSLocalizedString("How long did it take you to fall asleep?", comment: "");
    
    //Additional information
    let form1Title = NSLocalizedString("Sleep Times", comment: "");
    //Add custom selection type
    let minutes = [0, 15, 30, 45]
    var hourMinuteChoices: Array<ORKTextChoice> = []
    for hour in 0...23 {
        for minute in minutes {
            let choiceText = "\(hour) hours \(minute) minutes"
            let choiceValue = "\(hour)_\(minute)"
            hourMinuteChoices.append(ORKTextChoice(text: choiceText, value: choiceValue as NSCoding & NSCopying & NSObjectProtocol))
        }
    }
    
    //MARK: Answer formats used
    let pickTime = ORKAnswerFormat.timeOfDayAnswerFormat()
    let pickDate = ORKAnswerFormat.dateAnswerFormat(withDefaultDate: nil, minimumDate: nil, maximumDate: Date(), calendar: nil)
    let pickHowLong = ORKAnswerFormat.valuePickerAnswerFormat(with: hourMinuteChoices)
    
    
    //MARK: Survey begins
    var steps = [ORKStep]()
    
    //MARK: Form 1: Sleep Times
    let formStep = ORKFormStep(identifier: String(describing:Identifier.formStep), title: NSLocalizedString(form1Title, comment: ""), text: "")
    
    
    
    //First form page: Sleep Times
    // A first field, for entering a date.
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
    
    //Fifth field,  for entering a time interval.
    let formItem05Text = NSLocalizedString(timeUntilSleep, comment: "")
    let formItem05 = ORKFormItem(identifier: String(describing: Identifier.formItem05), text: formItem05Text, answerFormat: pickHowLong)
    
    formStep.formItems = [
        formItem01,
        formItem02,
        formItem03,
        formItem04,
        formItem05
    ]
    steps += [formStep]

    //MARK: Form 2: Sleep Awakenings
    
    
    //MARK: Form 3: Sleep Quality
    
    
    //MARK: Form 4: Beverages & Medicine
    
    
    //MARK: Summary Step
    let summaryStep = ORKCompletionStep(identifier: "SummaryStep")
    summaryStep.title = "Sleep data successfully recorded"
    summaryStep.text = "That was easy!"
    steps += [summaryStep]
    
    return ORKOrderedTask(identifier: "SurveyTask", steps: steps)
}


