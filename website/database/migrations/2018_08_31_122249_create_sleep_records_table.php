<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSleepRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sleep_records', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('awakeningsFinalDuration')->nullable();
            $table->unsignedInteger('awakeningsNumber')->default(0);
            $table->string('awakeningsTotalDuration')->nullable();
            $table->string('awakeningsFinalTime')->nullable();
            $table->string('date');
            $table->string('earlyWakeUpDuration')->nullable();
            $table->string('earlyWakeUp')->default(false);
            $table->string('feeling');
            $table->string('sleepDuration');
            $table->string('sleepQuality');
            $table->string('timeGotIntoBed');
            $table->string('timeTakenToSleepDuration');
            $table->string('timeToTrySleep');
            $table->string('timeWokenUp');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sleep_records');
    }
}
