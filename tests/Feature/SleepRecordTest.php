<?php

namespace Tests\Feature;

use App\User;
use App\SleepRecord;
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
            'earlyWakeUp' => true,
            'earlyWakeUpDuration' => '01:01',
            'feeling' => 'Somewhat rested',
            'sleepDuration' => '12:00',
            'sleepQuality' => 'Fair',
            'timeGotIntoBed' => '23:00',
            'timeTakenToSleepDuration' => '01:00',
            'timeToTrySleep' => '00:00',
            'timeWokenUp' => '07:00'
        ])
        ->assertSuccessful()
        ->assertJsonStructure(['awakeningsFinalDuration', 'awakeningsNumber', 'awakeningsTotalDuration', 'awakeningsFinalTime', 'date', 'earlyWakeUpDuration', 'feeling', 'sleepQuality', 'timeGotIntoBed','timeTakenToSleepDuration', 'timeToTrySleep', 'timeWokenUp', 'sleepDuration', 'earlyWakeUp']);

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
            'timeTakenToSleepDuration' => '01:00',
            'timeToTrySleep' => '00:00',
            'timeWokenUp' => '07:00',
            'earlyWakeUp' => '1'
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

    /** @test */
    public function authorized_users_can_update_sleep_records()
    {
        $this->withoutExceptionHandling();
        
        $sleepRecord = SleepRecord::create([
            'awakeningsFinalDuration' => '01:00',
            'awakeningsNumber' => 1,
            'awakeningsTotalDuration' => '01:00',
            'awakeningsFinalTime' => '06:00',
            'date' => '2018-08-30',
            'earlyWakeUp' => true,
            'earlyWakeUpDuration' => '01:01',
            'feeling' => 'Somewhat rested',
            'sleepDuration' => '12:00',
            'sleepQuality' => 'Fair',
            'timeGotIntoBed' => '23:00',
            'timeTakenToSleepDuration' => '01:00',
            'timeToTrySleep' => '00:00',
            'timeWokenUp' => '07:00',
            'user_id' => $this->user->id
        ]);
     
        $response = $this->actingAs($this->user)
            ->patchJson('/api/sleeprecords/' . $sleepRecord->id, [
                'sleepQuality' => 'Good'
            ])
            ->assertSuccessful();
            $this->assertDatabaseHas('sleep_records', [
                'sleepQuality' => 'Good'
            ]);
    }

    /** @test */
    public function authorized_user_can_get_sleep_record()
    {
        $sleepRecord = SleepRecord::create([
            'awakeningsFinalDuration' => '01:00',
            'awakeningsNumber' => 1,
            'awakeningsTotalDuration' => '01:00',
            'awakeningsFinalTime' => '06:00',
            'date' => '2018-08-30',
            'earlyWakeUp' => true,
            'earlyWakeUpDuration' => '01:01',
            'feeling' => 'Somewhat rested',
            'sleepDuration' => '12:00',
            'sleepQuality' => 'Fair',
            'timeGotIntoBed' => '23:00',
            'timeTakenToSleepDuration' => '01:00',
            'timeToTrySleep' => '00:00',
            'timeWokenUp' => '07:00',
            'user_id' => $this->user->id
        ]);

        $this->actingAs($this->user)
            ->getJson('/api/sleeprecords/' . $sleepRecord->id)
            ->assertSuccessful()
            ->assertJsonStructure(['awakeningsFinalDuration', 'awakeningsNumber', 'awakeningsTotalDuration', 'awakeningsFinalTime', 'date', 'earlyWakeUpDuration', 'feeling', 'sleepQuality', 'timeGotIntoBed','timeTakenToSleepDuration', 'timeToTrySleep', 'timeWokenUp', 'sleepDuration', 'earlyWakeUp']);
            
    }

    /** @test */
    public function authorized_user_can_delete_sleep_record()
    {
        $sleepRecord = SleepRecord::create([
            'awakeningsFinalDuration' => '01:00',
            'awakeningsNumber' => 1,
            'awakeningsTotalDuration' => '01:00',
            'awakeningsFinalTime' => '06:00',
            'date' => '2018-08-30',
            'earlyWakeUp' => true,
            'earlyWakeUpDuration' => '01:01',
            'feeling' => 'Somewhat rested',
            'sleepDuration' => '12:00',
            'sleepQuality' => 'Fair',
            'timeGotIntoBed' => '23:00',
            'timeTakenToSleepDuration' => '01:00',
            'timeToTrySleep' => '00:00',
            'timeWokenUp' => '07:00',
            'user_id' => $this->user->id
        ]);

        $this->actingAs($this->user)
            ->deleteJson('/api/sleeprecords/' . $sleepRecord->id)
            ->assertSuccessful();

        $this->assertDatabaseMissing('sleep_records', [
            'id' => $sleepRecord->id
        ]);
    }
}