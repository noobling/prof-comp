<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use App\Mail\Invite;

class EmailTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function authorized_user_can_send_email_invite()
    {
        $this->withoutExceptionHandling();
        Mail::fake();

        $user = factory(User::class)->create();
        $this->actingAs($user)
            ->postJson('/api/invite', [
                'email' => 'example@domain.com'
            ])
            ->assertSuccessful();

        Mail::assertSent(Invite::class, function ($mail) {
            return $mail->hasTo('example@domain.com');
        });
    }
}