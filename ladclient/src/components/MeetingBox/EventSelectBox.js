import styles from './styles.css';
// import cx from 'classnames/bind';
import { Row, Col, Button } from 'antd';

import React from 'react';
import PropTypes from 'prop-types';

const EventSelectBox = ({ events, eventId, meeting, onEventClick }) => {
  let now = Math.round((new Date()).getTime() / 1000);

  return (
    <Row type="flex" justify="center" align="middle" gutter={1} className={styles.title} >
      {
        events.map((event) => (
          <Col span={1} key={event.id}>
            <Button
              type={eventId === event.id ? 'primary' : event.outcome >= now ? 'default' : 'danger'}
              onClick={onEventClick(event.id, meeting.id)} >
              {event.race_num}
            </Button>
          </Col>
        ))
      }
    </Row>
  )
};

EventSelectBox.propTypes = {
  eventId: PropTypes.number.isRequired,
  meeting: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  onEventClick: PropTypes.func.isRequired,
};


export default EventSelectBox;
