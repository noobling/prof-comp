<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SleepRecordTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_can_create_a_new_sleep_record()
    {
        $this->withoutExceptionHandling();

        $this->postJson('/api/sleeprecord', [
            'awakeningsFinalDuration' => '01:00',
            'awakeningsNumber' => 1,
            'awakeningsTotalDuration' => '01:00',
            'awakeningsFinalTime' => '06:00',
            'date' => '2018-08-30',
            'earlyWakeUpDuration' => '01:01',
            'feeling' => 'Somewhat rested',
            'sleepQuality' => 'Fair',
            'timeGotIntoBed' => '23:00',
            'timeOutOfBed' => '08:00',
            'timeTakenToSleepDuration' => '01:00',
            'timeToTrySleep' => '00:00',
            'timeWokenUp' => '07:00'
        ])
        ->assertSuccessful()
        ->assertJsonStructure(['id', 'name', 'email']);
    }
}