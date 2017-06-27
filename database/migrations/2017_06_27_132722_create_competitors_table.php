<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompetitorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('competitors', function (Blueprint $table) {
            $table->integer('id');
            $table->index('id');
            $table->timestamps();
            $table->integer('event_id');
            $table->string('name');
            $table->tinyInteger('saddle_number');
            $table->tinyInteger('barrier');
            $table->string('eliminated');
            $table->string('apn');
            $table->string('fixed_win_price');
            $table->string('fixed_place_price');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('competitors');
    }
}
