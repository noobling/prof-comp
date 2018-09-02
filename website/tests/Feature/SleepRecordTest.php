<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SleepRecordTest extends TestCase
{
    use RefreshDatabase;
    /** @var \App\User */
    protected $user;

    public function setUp()
    {
        parent::setUp();
        $this->user = factory(User::class)->create();
    }
    /** @test */
    public function a_user_can_create_a_new_sleep_record()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->user)
            ->postJson('/api/user/sleeprecord', [
            'awakeningsFinalDuration' => '01:00',
            'awakeningsNumber' => 1,
            'awakeningsTotalDuration' => '01:00',
            'awakeningsFinalTime' => '06:00',
            'date' => '2018-08-30',
            'earlyWakeUpDuration' => '01:01',
            'feeling' => 'Somewhat rested',
            'sleepDuration' => '12:00',
            'sleepQuality' => 'Fair',
            'timeGotIntoBed' => '23:00',
            'timeOutOfBed' => '08:00',
            'timeTakenToSleepDuration' => '01:00',
            'timeToTrySleep' => '00:00',
            'timeWokenUp' => '07:00'
        ])
        ->assertSuccessful()
        ->assertJsonStructure(['awakeningsFinalDuration', 'awakeningsNumber', 'awakeningsTotalDuration', 'awakeningsFinalTime', 'date', 'earlyWakeUpDuration', 'feeling', 'sleepQuality', 'timeGotIntoBed', 'timeOutOfBed', 'timeTakenToSleepDuration', 'timeToTrySleep', 'timeWokenUp', 'sleepDuration']);

        $this->assertDatabaseHas('sleep_records', [
            'awakeningsFinalDuration' => '01:00',
            'awakeningsNumber' => 1,
            'awakeningsTotalDuration' => '01:00',
            'awakeningsFinalTime' => '06:00',
            'date' => '2018-08-30',
            'earlyWakeUpDuration' => '01:01',
            'feeling' => 'Somewhat rested',
            'sleepDuration' => '12:00',            
            'sleepQuality' => 'Fair',
            'timeGotIntoBed' => '23:00',
            'timeOutOfBed' => '08:00',
            'timeTakenToSleepDuration' => '01:00',
            'timeToTrySleep' => '00:00',
            'timeWokenUp' => '07:00'
        ]);
    }

    /** @test */
    public function a_researcher_can_access_all_users_sleep_records ()
    {
        $user = factory(User::class)->create(['type' => 'Researcher']);
        $this->actingAs($user)
            ->getJson('/api/sleeprecords/all')
            ->assertSuccessful();
    }
}