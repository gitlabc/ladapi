<?php
namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DbRepositoryTest extends TestCase
{
    public function testDatabase()
    { 
        $meetingCount = \App\Meeting::count();
        $eventCount = \App\Event::count();
        $competitorCount = \App\Competitor::count();

        $this->assertEquals($eventCount, $meetingCount * 10);
        $this->assertEquals($competitorCount, $eventCount * 10);

        $this->assertDatabaseHas('meetings', [
            'country' => 'AU'
        ]);
    }

    public function testGetNext5Meetings()
    {
        $repository = new \App\Lad\Implementations\DbRepository();
        
        $meetings = $repository->getNext5Meetings();
        // \print_r($meetings->toArray());

        $this->assertNotNull($meetings);
    }

    public function testGetGetClosestEventId()
    {
        $repository = new \App\Lad\Implementations\DbRepository();
                
        $meetings = $repository->getNext5Meetings();
        $this->assertNotNull($meetings);
        $eventId = $repository->getClosestEventId($meetings);
        if ($meetings->count() > 0) {
            $this->assertTrue($eventId > 0);
        }
        else {
            $this->assertEquals($eventId, -1);
        }
    }

    public function testGetNext5Competitors()
    {
        $repository = new \App\Lad\Implementations\DbRepository();
                
        $meetings = $repository->getNext5Meetings();
        $eventId = $repository->getClosestEventId($meetings);
        $competitors = $repository->getNext5Competitors($eventId);
        $this->assertArrayHasKey('competitors', $competitors);
    }
}
