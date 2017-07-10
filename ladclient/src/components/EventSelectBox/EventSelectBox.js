import styles from './styles.css';
// import cx from 'classnames/bind';
import { Row, Col, Button } from 'antd';

import React from 'react';
import PropTypes from 'prop-types';

const EventSelectBox = ({ events, event, meeting, onEventClick }) => {
  let now = Math.round((new Date()).getTime() / 1000);

  return (
    <Row type="flex" justify="center" align="middle" gutter={1} className={styles.title} >
      {
        events.map((e) => (
          <Col span={1} key={e.id}>
            <Button
              type={e.id === event.id ? 'primary' : e.outcome >= now ? 'default' : 'danger'}
              onClick={onEventClick(e.id, meeting.id)} >
              {e.race_num}
            </Button>
          </Col>
        ))
      }
    </Row>
  )
};

EventSelectBox.propTypes = {
  event: PropTypes.object.isRequired,
  meeting: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  onEventClick: PropTypes.func.isRequired,
};

export default EventSelectBox;