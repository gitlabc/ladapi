<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
     protected $fillable = [
        'race_num', 'description', 'outcome','status'
    ];

    public function competitors(){
        return $this->hasMany('App\Competitor');
    }
}
