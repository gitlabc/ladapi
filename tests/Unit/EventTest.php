<?php
declare (strict_types = 1);

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class EventTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testFillable()
    {
        $event = new \App\Event();
        $this->assertAttributeEquals([
            'race_num', 'description', 'outcome_date', 'outcome', 'status'
        ], 'fillable', $event);
    }
}
