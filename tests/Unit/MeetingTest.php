<?php
declare (strict_types = 1);

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class MeetingTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testFillable() : void
    {
        $meeting = new \App\Meeting();
        $this->assertAttributeEquals([
            'name', 'type', 'date', 'country'
        ], 'fillable', $meeting);
    }
}
