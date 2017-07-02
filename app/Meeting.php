<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    protected $fillable = [
        'name', 'type', 'date', 'country'
    ];
    protected $hidden = ['created_at', 'updated_at'];

    public $incrementing = false;
    public $timestamps = true;

    public function events()
    {
        return $this->hasMany('App\Event', 'meeting_id', 'id');
    }
}
