<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'race_num', 'description', 'outcome_date', 'outcome', 'status'
    ];
    protected $hidden = ['created_at', 'updated_at', 'meeting_id', 'outcome_date'];

    public $incrementing = false;
    public $timestamps = true;

    public function competitors()
    {
        return $this->hasMany('App\Competitor', 'event_id', 'id');
    }
}
