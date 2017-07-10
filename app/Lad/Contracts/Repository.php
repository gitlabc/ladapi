<?php
declare (strict_types = 1);

namespace App\Lad\Contracts;

interface Repository
{
    public function getNext5Info(string $meetingId, string $eventId) : array;
}