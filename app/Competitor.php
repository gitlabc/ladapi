<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Competitor extends Model
{
    protected $fillable = [
        'name', 'saddle_number', 'barrier','eliminated', 'apn', 'fixed_win_price','fixed_place_price'
    ];
    protected $hidden = ['created_at', 'updated_at', 'event_id'];

    public $incrementing = false;
    public $timestamps = true;
}
