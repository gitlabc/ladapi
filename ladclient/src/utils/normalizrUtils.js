import { normalize, schema } from 'normalizr';

export function getRaceEvents(originalData) {
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

