<?php

use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function (){
   Route::prefix('admin')->group(function (){

   });
});

