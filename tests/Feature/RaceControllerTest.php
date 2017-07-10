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

    public function testGetNext5WithNullMeetingAndNullEvent()
    {
        $response = $this->get('/api/v1/next5?meeting=&event=');
        $response->assertStatus(200)
            ->assertJson(['status' => 'Successful', ])
            ->assertJsonMissing(['type' => 'next5'])
            ->assertJsonMissing(['type' => 'competitor']);
    }

    public function testGetNext5WithAllMeeting()
    {
        $response = $this->get('/api/v1/next5?meeting=all');
        $response->assertStatus(200)
            ->assertJson(['status' => 'Successful', ])
            ->assertJsonFragment(['type' => 'next5'])
            ->assertJsonFragment(['type' => 'competitor']);
    }

    public function testGetNext5WithAllMeetingAllAndEvent()
    {
        $response = $this->get('/api/v1/next5?meeting=all&event=340930');
        $response->assertStatus(200)
            ->assertJson(['status' => 'Successful', ]) 
            ->assertJsonFragment(['type' => 'next5'])
            ->assertJsonFragment(['type' => 'competitor']);
    }

    public function testGetNext5WithMeetingAndEvent()
    {
        $response = $this->get('/api/v1/next5?meeting=4724&event=340930');
        $response->assertStatus(200)
            ->assertJson(['status' => 'Successful', ])
            ->assertJsonFragment(['type' => 'next5'])
            ->assertJsonFragment(['type' => 'competitor']);
    }
    
    public function testGetNext5WithOnlyEvent()
    {
        $response = $this->get('/api/v1/next5?event=340930');
        $response->assertStatus(200)
            ->assertJson(['status' => 'Successful', ])
            ->assertJsonMissing(['type' => 'next5'])
            ->assertJsonFragment(['type' => 'competitor']);
    }
} 
