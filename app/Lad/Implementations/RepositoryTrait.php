<?php
declare (strict_types = 1);
namespace App\Lad\Implementations;
/**
 * 
 */
trait RepositoryTrait
{
    public function getMessage(string $meeting, string $event_id) : array
    {
        $meetings = null;
        $competitors = null;
        if (empty($meeting) === false) {
            $meetingCol = $this->getNext5Meetings();
            $meetings = [
                'type' => 'next5',
                'data' => $meetingCol->toArray(),
                'hash' => '',
            ];

            if (empty($event_id) === false) {
                $event_id = (string)$this->getClosestEventId($meetingCol);
                $competitors = [
                    'type' => 'competitor',
                    'data' => $this->getNext5Competitors($event_id),
                    'hash' => '',
                ]; 
            }
        }

        if (empty($event_id) === false) {
            $competitors = [
                'type' => 'competitor',
                'data' => $this->getNext5Competitors($event_id),
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
