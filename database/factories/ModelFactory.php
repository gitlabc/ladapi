<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Meeting::class, function (Faker\Generator $faker) {
    $meeting = [
        'id' => $faker->unique()->numberBetween($min = 1000, $max = 9000),
        'name' => $faker->unique()->city,
        'type' => $faker->randomElement($array = array('T', 'G', 'H')),
        'date' => $faker->dateTimeBetween($startDate = 'now', $endDate = '+1 days', $timezone = date_default_timezone_get()),
        'country' => 'AU',
    ];
    return $meeting;
});

$factory->define(App\Event::class, function (Faker\Generator $faker) {
    $outcomeDate = $faker->dateTimeBetween($startDate = '-10 minutes', $endDate = '+50 minutes', $timezone = date_default_timezone_get());
    $meeting = [
        'id' => $faker->unique()->numberBetween($min = 10000, $max = 90000),
        'race_num' => $faker->numberBetween($min = 1, $max = 10),
        'description' => $faker->streetName(),
        'outcome_date' => $outcomeDate,
        'outcome' => $outcomeDate->getTimestamp(),
        'status' => 'open',
    ];
    return $meeting;
});

$factory->define(App\Competitor::class, function (Faker\Generator $faker) {
    $apns = array();
    for ($i = 0; $i < 8; $i++) {
        $apns[] = strval($faker->randomFloat($nbMaxDecimals = 1, $min = 1.5, $max = 10));
    }
    sort($apns);
    $meeting = [
        'id' => $faker->unique()->numberBetween($min = 100000, $max = 900000),
        'name' => $faker->name,
        'saddle_number' => $faker->numberBetween($min = 1, $max = 10),
        'barrier' => $faker->numberBetween($min = 1, $max = 10),
        'eliminated' => $faker->optional($weight = 0.9, $default = 'yes')->randomElement($array = array('yes', 'no')),
        'apn' => implode(',', $apns),
        'fixed_win_price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 1.5, $max = 99.9),
        'fixed_place_price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 1.5, $max = 99.9),
    ];
    return $meeting;
});
