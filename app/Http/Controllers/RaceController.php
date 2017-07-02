<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Lad\Contracts\Repository;

class RaceController extends Controller
{
    protected $repository;

    public function __construct(Repository $rep)
    {
        $this->repository = $rep;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function nextFive(Request $request)
    {
        $meeting = $request->input('meeting') ?? '';
        $event_id = $request->input('event_id') ?? '';

        $message = $this->repository->getMessage($meeting, $event_id);

        return response()->json($message, 200);
    }
}
