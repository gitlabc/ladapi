import styles from './styles.css';
// import cx from 'classnames/bind';
import { Row, Col } from 'antd';

import React from 'react';
import PropTypes from 'prop-types';

const EventInfoBox = ({ event }) => (
  <div>
    <Row type="flex" justify="center" align="middle" gutter={1} className={styles.racenum} >
      <Col span={24} style={{ textAlign: 'center' }}>
        <div>
          RACE {event && event.race_num}
        </div>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle" gutter={1} className={styles.description} >
      <Col span={24} style={{ textAlign: 'center' }}>
        <div>
          {event && event.description}
        </div>
      </Col>
    </Row>
  </div>
)

EventInfoBox.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventInfoBox;
