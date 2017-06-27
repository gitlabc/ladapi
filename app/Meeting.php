<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    protected $fillable = [
        'name', 'type', 'date','country'
    ];
 
    public function events(){
        return $this->hasMany('App\Event');
    }
}
