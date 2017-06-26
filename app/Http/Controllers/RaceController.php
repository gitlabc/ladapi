<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RaceController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function nextFive(Request $request)
    {
        $meeting_hash = $request->input('meeting_hash');
        $event_id = $request->input('event_id');

        // $meeting = Meeting::findOrFail($meeting_id);
        // $user = User::findOrFail($user_id);
        if ($meeting->users()->where('users.id', $user->id)->first()) {
            $message = [
                'msg' => 'User is already registered for this meeting',
                'user' => $user,
                'meeting' => $meeting,
                'unregister' => [
                    'href' => 'api/v1/meeting/registration/'.$meeting->id,
                    'method' => 'DELETE',
                ],
            ];

            return response()->json($message, 404);
        }
    }
}
