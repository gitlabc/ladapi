<?php
declare (strict_types = 1);
namespace App\Lad\Implementations;
/**
 * 
 */
trait DbRepositoryTrait
{
    public function getNext5Meetings(string $meetingId) : \Illuminate\Support\Collection
    {
        $meetings = $meetingId === 'all' ? $this->getClosestNext5Meetings() : $this->getSingleNext5Meeting($meetingId);
        return $meetings;
    }

    private function getSingleNext5Meeting(string $meetingId) : \Illuminate\Support\Collection
    {
        $meetings = \App\Meeting::where('id', '=', $meetingId)
            ->whereHas('events', function ($query) {
            $query->where([
                ['outcome_date', '>=', new \DateTime()],
            ]);
        })
            ->with('events')->get();

        return $meetings;
    }

    private function getClosestNext5Meetings() : \Illuminate\Support\Collection
    {
        $meetings = null;

        foreach (TYPES as $type) {
            $value = \App\Meeting::where('type', '=', $type)
                ->whereHas('events', function ($query) {
                $query->where([
                    ['outcome_date', '>=', new \DateTime()],
                ]);
            })
                ->take(10)
                ->with('events')->get();

            if (empty($meetings)) {
                $meetings = $value;
            }
            else {
                $meetings = $meetings->merge($value);
            }
        }
        return $meetings;
    }


    public function getClosestEventId(\Illuminate\Support\Collection $meetings) : int
    {
        $event = $meetings->map(function ($item, $key) {
            return $item->events;
        })
            ->flatten()
            ->sortBy('outcome')
            ->first();
        return $event ? $event->id : -1;
    }

    public function getNext5Competitors(string $eventId) : array
    {
        $event = \App\Event::where('id', '=', $eventId)->get();
        $competitors = \App\Competitor::where('event_id', '=', $eventId)->orderBy('saddle_number')->get();
        $data = [
            'event_id' => $eventId,
            'competitors' => $competitors->toArray(),
            'event' => $event->toArray(),
        ];

        return $data;
    }
}
