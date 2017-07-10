<?php
declare (strict_types = 1);
namespace App\Lad\Implementations;

define('TYPES', ['T', 'G', 'H']);

class DbRepository implements \App\Lad\Contracts\Repository
{
    use DbRepositoryTrait;

    public function getNext5Info(string $meetingId, string $eventId) : array
    {
        $meetings = null;
        $competitors = null;
        if (empty($meetingId) === false) {
            $meetingCol = $this->getNext5Meetings($meetingId);
            $meetings = [
                'type' => 'next5',
                'data' => $meetingCol->toArray(),
                'hash' => '',
            ];

            if ($meetingId === 'all') {
                $eventId = (string)$this->getClosestEventId($meetingCol);
                $competitors = [
                    'type' => 'competitor',
                    'data' => $this->getNext5Competitors($eventId),
                    'hash' => '',
                ];
            }
        }

        if (empty($eventId) === false) {
            $competitors = [
                'type' => 'competitor',
                'data' => $this->getNext5Competitors($eventId),
                'hash' => '',
            ];
        }

        $message = [
            'status' => 'Successful',
            'updates' => [],
        ];

        if (empty($meetings) === false) {
            $message['updates'][] = $meetings;
        }
        if (empty($competitors) === false) {
            $message['updates'][] = $competitors;
        }
        return $message;
    }
}