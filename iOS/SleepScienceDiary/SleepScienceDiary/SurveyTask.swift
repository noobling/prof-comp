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
    case formTask
    case formStep
    case formItem01
    case formItem02
    case formItem03
}

public var SurveyTask: ORKOrderedTask {
    
    /*
    var steps = [ORKStep]()
    
    //Instructions step
    let instructionStep = ORKInstructionStep(identifier: "IntroStep")
    instructionStep.title = "New Sleep Record"
    instructionStep.text = "Please enter information about how you last slept, to the best of your ability."
    steps += [instructionStep]
    
    //TODO: add name question
    let nameAnswerFormat = ORKTextAnswerFormat(maximumLength: 20)
    nameAnswerFormat.multipleLines = false
    let nameQuestionStepTitle = "What is your name?"
    let nameQuestionStep = ORKQuestionStep(identifier: "QuestionStep", title: nameQuestionStepTitle, answer: nameAnswerFormat)
    steps += [nameQuestionStep]
    
    //TODO: add 'what is your quest' question
    
    //TODO: add color question step
    
    //TODO: add summary step
    */
    
    //Other Code
    let exampleDetailText = NSLocalizedString("Additional text can go here.", comment: "");
    let exampleQuestionText = NSLocalizedString("Question text can go here.", comment: "");
    
    let step = ORKFormStep(identifier: String(describing:Identifier.formStep), title: NSLocalizedString("Form Step", comment: ""), text: exampleDetailText)
    
    // A first field, for entering an integer.
    let formItem01Text = NSLocalizedString("Field01", comment: "")
    let formItem01 = ORKFormItem(identifier: String(describing:Identifier.formItem01), text: formItem01Text, answerFormat: ORKAnswerFormat.integerAnswerFormat(withUnit: nil))
    formItem01.placeholder = NSLocalizedString("Your placeholder here", comment: "")
    
    // A second field, for entering a time interval.
    let formItem02Text = NSLocalizedString("Field02", comment: "")
    let formItem02 = ORKFormItem(identifier: String(describing:Identifier.formItem02), text: formItem02Text, answerFormat: ORKTimeIntervalAnswerFormat())
    formItem02.placeholder = NSLocalizedString("Your placeholder here", comment: "")
    
    let formItem03Text = NSLocalizedString(exampleQuestionText, comment: "")
    let scaleAnswerFormat = ORKContinuousScaleAnswerFormat.init(maximumValue: 10, minimumValue: 0, defaultValue: 0.0, maximumFractionDigits: 1)//ORKScaleAnswerFormat(maximumValue: 10, minimumValue: 0, defaultValue: 0, step: 1)
    let formItem03 = ORKFormItem(identifier: String(describing: Identifier.formItem03), text: formItem03Text, answerFormat: scaleAnswerFormat)
    
    step.formItems = [
        formItem03,
        formItem01,
        formItem02
        
    ]
    
    return ORKOrderedTask(identifier: "SurveyTask", steps: [step])
}


