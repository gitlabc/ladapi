import * as meetingsPackage from './meetings.json';
import { getCurrentTimestamp } from './commonUtils';
import { initRaceTypeState } from '../redux/reducers/initialState';
import { getNext5MeetingsAndEvents, getNext5CompetitorData } from './normalizrUtils';

const meetingsJson = meetingsPackage.updates[0].data;
const objEvents = getNext5MeetingsAndEvents(meetingsJson).entities.events;
const objMeetings = getNext5MeetingsAndEvents(meetingsJson).entities.meetings;
const { competitors } = getNext5CompetitorData(meetingsPackage);

const meetings = Object.keys(objMeetings).map(key => (objMeetings[key]));
const event = objEvents[Object.keys(objEvents)[0]];
const meeting = objMeetings[event.meeting_id];
const meetingEvents = (meeting.events).map(eventId => {
    return objEvents[eventId + ''];
}) || [];

const competitor = competitors[0];
const now = getCurrentTimestamp();

const top5Events = Object.keys(objEvents).slice(0, 5).map(key => {
    let obj = objEvents[key];
    obj.meetingName = objMeetings[obj.meeting_id].name;
    return obj;
});

const raceTypes = initRaceTypeState.toJS();

export { event, meetingEvents, competitors, meeting, meetings, competitor, now, top5Events, raceTypes };
