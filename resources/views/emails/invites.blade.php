@component('mail::message')
# Invitation to Sleep Diary App

Center for Sleep Science Invites you to use their sleep diary app to record your sleep.

@component('mail::button', ['url' => env('APP_URL') . '/register'])
Register
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
