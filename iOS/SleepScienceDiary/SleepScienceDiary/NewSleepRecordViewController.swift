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
            let result = taskViewController.result
            
            let jsonData = try! ORKESerializer.jsonData(for: result)
            if let jsonString = NSString(data: jsonData, encoding: String.Encoding.utf8.rawValue) {
                print(jsonString)
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
