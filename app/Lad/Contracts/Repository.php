<?php
declare (strict_types = 1);

namespace App\Lad\Contracts;

interface Repository
{
    public function getNext5Meetings() : \Illuminate\Support\Collection;

    public function getClosestEventId(\Illuminate\Support\Collection $meetings) : int;

    public function getNext5Competitors(string $eventId) : array;

    public function getMessage(string $meeting, string $eventId) : array;
}