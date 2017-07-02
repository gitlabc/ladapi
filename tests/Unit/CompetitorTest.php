<?php
declare (strict_types = 1);

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CompetitorTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testFillable()
    {
        $competitor = new \App\Competitor();
        $this->assertAttributeEquals([
            'name', 'saddle_number', 'barrier', 'eliminated', 'apn', 'fixed_win_price', 'fixed_place_price'
        ], 'fillable', $competitor);
    }
}
