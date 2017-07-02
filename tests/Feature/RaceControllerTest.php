<?php
namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class RaseControllerTest extends TestCase
{
    public function testRoot()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function testGetNext5WithOnlyMeeting()
    {
        $response = $this->get('/api/v1/next5?meeting=1');
        $response->assertStatus(200)
            ->assertJson(['status' => 'Successful', ])
            ->assertJsonFragment(['type' => 'next5'])
            ->assertJsonMissing(['type' => 'competitor', ]);

        $response = $this->get('/api/v1/next5?meeting=1&event_id=');
        $response->assertStatus(200)
            ->assertJson(['status' => 'Successful', ])
            ->assertJsonFragment(['type' => 'next5'])
            ->assertJsonMissing(['type' => 'competitor', ]);
    }

    public function testGetNext5WithMeetingAndEventId()
    {
        $response = $this->get('/api/v1/next5?meeting=1&event_id=340930');
        $response->assertStatus(200)
            ->assertJson(['status' => 'Successful', ]) 
            ->assertJsonFragment(['type' => 'next5'])
            ->assertJsonFragment(['type' => 'competitor']);
    }
    
    public function testGetNext5WithOnlyEventId()
    {
        $response = $this->get('/api/v1/next5?event_id=340930');
        $response->assertStatus(200)
            ->assertJson(['status' => 'Successful', ])
            ->assertJsonMissing(['type' => 'next5'])
            ->assertJsonFragment(['type' => 'competitor']);
    }
} 
