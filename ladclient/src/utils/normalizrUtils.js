
import { normalize, schema } from 'normalizr';

export function getNext5MeetingsAndEvents(originalData) {
    const eventSchema = new schema.Entity('events', {}, {
        processStrategy: (value, parent, key) => {
            return { ...value, meeting_id: parent.id, type: parent.type };
        }
    });
    const meetingSchema = new schema.Entity('meetings', {
        events: [eventSchema],
    });
    const normalizedData = normalize(originalData, [meetingSchema]);
    return normalizedData;
}

export function getNext5CompetitorData(json){
    let competitorData = json.updates.filter(update => {
        return update.type === 'competitor' && update.data.competitors.length > 0;
    });
    return competitorData && competitorData[0].data;
}
