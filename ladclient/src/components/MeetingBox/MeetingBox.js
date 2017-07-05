import React from 'react';
import PropTypes from 'prop-types';

import MeetingDispBox from './MeetingDispBox';
import EventSelectBox from './EventSelectBox';
import EventInfoBox from './EventInfoBox';

const MeetingBox = ({ eventId, meeting, events, onEventClick }) => {
  const event = events.filter(e => e.id === eventId)[0];
  return (
    <div>
      <MeetingDispBox meeting={meeting} />
      <div style={{ backgroundColor: '#fff' }}>
        <EventSelectBox events={events} eventId={eventId} meeting={meeting} onEventClick={onEventClick} />
        <EventInfoBox event={event} />
      </div>
    </div>
  );
}

MeetingBox.propTypes = {
  eventId: PropTypes.number.isRequired,
  meeting: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  onEventClick: PropTypes.func.isRequired,
};

export default MeetingBox;
