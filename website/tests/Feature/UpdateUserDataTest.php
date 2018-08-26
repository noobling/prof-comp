<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Testing\RefreshDatabase;


class UpdateUserDataTest extends TestCase
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
    public function update_profile_info()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->user)
            ->patchJson('/api/user', [
                'name' => 'Test User',
                'email' => 'test@test.app',
            ])
            ->assertSuccessful()
            ->assertJsonStructure(['id', 'name', 'email']);

        $this->assertDatabaseHas('users', [
            'id' => $this->user->id,
            'name' => 'Test User',
            'email' => 'test@test.app',
        ]);
    }

    /** @test */
    public function can_update_avatar()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->user)
            ->postJson('/api/user/avatar', [
                'avatar' => 'https://fakeimg.pl/250x100'
            ])
            ->assertSuccessful()
            ->assertJsonStructure(['avatar']);

        $this->assertDatabaseHas('users', [
            'avatar' => 'https://fakeimg.pl/250x100'
        ]);
    }

    // /** @test */
    // public function update_password()
    // {
    //     $this->actingAs($this->user)
    //         ->patchJson('/settings/password', [
    //             'password' => 'updated',
    //             'password_confirmation' => 'updated',
    //         ])
    //         ->assertSuccessful();
    //     $this->assertTrue(Hash::check('updated', $this->user->password));
    // }
}