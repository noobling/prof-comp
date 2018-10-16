//
//  NewSleepRecordViewController.swift
//  SleepScienceDiary
//
//  Created by Michael Dorrell on 4/10/18.
//  Copyright © 2018 Michael Dorrell. All rights reserved.
//

import UIKit
import ResearchKit

class NewSleepRecordViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.

    }
    
    @IBAction func surveyTapped(sender : AnyObject) {
        let taskViewController = ORKTaskViewController(task: SurveyTask, taskRun: nil)
        taskViewController.delegate = self as ORKTaskViewControllerDelegate
        present(taskViewController, animated: true, completion: nil)
    }
    
    
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}


extension NewSleepRecordViewController : ORKTaskViewControllerDelegate {
    func taskViewController(_ taskViewController: ORKTaskViewController, didFinishWith reason: ORKTaskViewControllerFinishReason, error: Error?) {
        
        //Dismiss the survey
        taskViewController.dismiss(animated: true, completion: nil)
        
        //Choose what to do based on reason for exiting
        switch(reason) {
        case .completed:
            
            //Convert results into a dictionary
            let taskResult = taskViewController.result.results
            for stepResults in taskResult! as! [ORKStepResult]
            {
                for result in stepResults.results!
                {
                    //First form
                    if result.identifier == "formItem01"
                    {
                        print(result.identifier)
                        print(result)
                        
                    }
                    if result.identifier == "formItem02"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem03"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem04"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem05"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    //Second form
                    if result.identifier == "formItem11"
                    {
                        print(result.identifier)
                        print(result)
                        
                    }
                    if result.identifier == "formItem12"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem13"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem14"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem15"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem16"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    //Third form
                    if result.identifier == "formItem21"
                    {
                        print(result.identifier)
                        print(result)
                        
                    }
                    if result.identifier == "formItem22"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem23"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem24"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem25"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    //Fourth form
                    if result.identifier == "formItem31"
                    {
                        print(result.identifier)
                        print(result)
                        
                    }
                    if result.identifier == "formItem32"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem33"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem34"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem35"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem36"
                    {
                        print(result.identifier)
                        print(result)
                    }
                    if result.identifier == "formItem37"
                    {
                        print(result.identifier)
                        print(result)
                    }
                }
                
                
            }
            
            print("Success!")
            break
        case .failed:
            print("Error occurred during task") //TODO remove later
            break
        default:
            print("User cancelled") //TODO remove later
            break
        }
    }
}
