<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;


Route::apiResource('products', ProductController::class);
Route::get('/ping', function () {
    return response()->json(['message' => 'pong']);
});
