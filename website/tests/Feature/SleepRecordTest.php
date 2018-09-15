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
        $this->sleepRecord = SleepRecord::create([
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
            'user_id' => $this->user->id,
            'napDozeNum' => 2,
            'napDozeDuration' => '01:10',
            'alcoholNum' => 2,
            'alcoholTime' => '07:00',
            'caffeinatedNum' => 2,
            'caffeinatedTime' => '08:00',
            'otcMed' => true,
            'medicines' => array('Relaxo-Herb, 50 mg, 11 pm', 'Relaxo-Herb, 50 mg, 12 pm'),
            'comments' => 'A comment'
        ]);
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
            'timeWokenUp' => '07:00',
            'napDozeNum' => 2,
            'napDozeDuration' => '01:10',
            'alcoholNum' => 2,
            'alcoholTime' => '07:00',
            'caffeinatedNum' => 2,
            'caffeinatedTime' => '08:00',
            'otcMed' => true,
            'medicines' => array('Relaxo-Herb, 50 mg, 11 pm', 'Relaxo-Herb, 50 mg, 12 pm'),
            'comments' => 'A comment'
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
            'earlyWakeUp' => '1',
            'napDozeNum' => 2,
            'napDozeDuration' => '01:10',
            'alcoholNum' => 2,
            'alcoholTime' => '07:00',
            'caffeinatedNum' => 2,
            'caffeinatedTime' => '08:00',
            'otcMed' => 1,
            'medicines' => "[\"Relaxo-Herb, 50 mg, 11 pm\",\"Relaxo-Herb, 50 mg, 12 pm\"]",
            'comments' => 'A comment'
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
        
     
        $response = $this->actingAs($this->user)
            ->patchJson('/api/sleeprecords/' . $this->sleepRecord->id, [
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
        $this->actingAs($this->user)
            ->getJson('/api/sleeprecords/' . $this->sleepRecord->id)
            ->assertSuccessful()
            ->assertJsonStructure(['awakeningsFinalDuration', 'awakeningsNumber', 'awakeningsTotalDuration', 'awakeningsFinalTime', 'date', 'earlyWakeUpDuration', 'feeling', 'sleepQuality', 'timeGotIntoBed','timeTakenToSleepDuration', 'timeToTrySleep', 'timeWokenUp', 'sleepDuration', 'earlyWakeUp']);
            
    }

    /** @test */
    public function authorized_user_can_delete_sleep_record()
    {
        $this->actingAs($this->user)
            ->deleteJson('/api/sleeprecords/' . $this->sleepRecord->id)
            ->assertSuccessful();

        $this->assertDatabaseMissing('sleep_records', [
            'id' => $this->sleepRecord->id
        ]);
    }

    /** @test */
    public function authorized_user_can_retrieve_all_sleep_records_of_particular_user()
    {
        $this->withoutExceptionHandling();

        $user = factory(User::class)->create();

        SleepRecord::create([
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
            'user_id' => $user->id,
            'napDozeNum' => 2,
            'napDozeDuration' => '01:10',
            'alcoholNum' => 2,
            'alcoholTime' => '07:00',
            'caffeinatedNum' => 2,
            'caffeinatedTime' => '08:00',
            'otcMed' => true,
            'medicines' => array('Relaxo-Herb, 50 mg, 11 pm', 'Relaxo-Herb, 50 mg, 12 pm'),
            'comments' => 'A comment'
        ]);

        $response = $this->actingAs($this->user)
            ->getJson('/api/user/' . $this->user->id . '/sleeprecords/')
            ->assertSuccessful();
    }
}