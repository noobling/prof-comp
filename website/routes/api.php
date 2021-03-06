<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'researcher:api'], function () {
    Route::get('sleeprecords/all', 'SleepRecordController@index');
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');
    Route::patch('user', 'UserController@update');
    Route::post('user/avatar', 'UserController@updateAvatar');
    Route::post('user/sleeprecord', 'SleepRecordController@store');
    Route::get('user/{user}/sleeprecords', 'SleepRecordController@user');
    Route::patch('sleeprecords/{sleepRecord}', 'SleepRecordController@update');
    Route::get('sleeprecords/{sleepRecord}', 'SleepRecordController@show');
    Route::delete('sleeprecords/{sleepRecord}', 'SleepRecordController@destroy');
    Route::get('sleeprecords/{user}/latest', 'SleepRecordController@latest');
    Route::post('invite', 'EmailsController@invite');
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('login', 'Auth\LoginController@login');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
});
