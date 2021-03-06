<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function can_register()
    {
        $this->withoutExceptionHandling();

        $this->postJson('/api/register', [
            'email' => 'test@test.app',
            'password' => 'secret'
        ])
        ->assertSuccessful()
        ->assertJsonStructure(['id','email']);
    }
}