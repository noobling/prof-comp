<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SleepRecord;

class SleepRecordController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'awakeningsNumber' => 'Integer|min:0',
            'date' => 'required|date',
            'feeling' => 'required|string',
            'sleepDuration' => 'required|date_format:H:i',
            'sleepQuality' => 'required|string',
            'timeGotIntoBed' => 'required|date_format:H:i',
            'timeTakenToSleepDuration' => 'required|date_format:H:i',
            'timeToTrySleep' => 'required|date_format:H:i',
            'timeWokenUp' => 'required|date_format:H:i'
        ]);

        $sleepRecord = SleepRecord::make($request->all());
        $sleepRecord->user_id = auth()->id();
        $sleepRecord->save();

        return $sleepRecord;
    }

    public function index(Request $request)
    {
        return SleepRecord::all()->groupBy('user_id');
    }

    public function user(Request $request)
    {
        return $request->user()->sleepRecords;
    }
}
