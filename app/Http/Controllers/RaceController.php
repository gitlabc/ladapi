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
        $meeting = $request->input('meeting');
        $event_id = $request->input('event_id');

        $meetings = null;
        $competitors = null;
        if ( $meeting == 1) {
            $meetings = [
                'type' => 'meetings',
                'data' => [],
                'hash' => '',
            ];
        }

        if($event_id !== null){
            $competitors = [
                'type' => 'competitors',
                'data' => [],
                'hash' => '',
            ];
        }

        // $meeting = Meeting::findOrFail($meeting_id);
        // $user = User::findOrFail($user_id);
        // if ($meeting->users()->where('users.id', $user->id)->first()) {
            $message = [
                'status' => 'succ',
                'results' => [],
            ];

            if($meetings != null){
                $message['results'][] = $meetings;
            }
            if($competitors != null){
                $message['results'][] = $competitors;
            }

            return response()->json($message, 200);
        // }
    }
}
