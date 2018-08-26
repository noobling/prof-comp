<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class GetUserDataTest extends TestCase
{
    use RefreshDatabase;

    /** @var \App\User */
    protected $user;
    public function setUp()
    {
        parent::setUp();
        $this->user = factory(User::class)->create();
    }

    /** @test */
    public function fetch_the_current_user()
    {
        $this->actingAs($this->user)
            ->getJson('/api/user')
            ->assertSuccessful()
            ->assertJsonStructure(['id', 'name', 'email']);
    }
}