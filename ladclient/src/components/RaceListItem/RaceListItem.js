import styles from './styles.css';
import icon from '../../utils/icon.css';
import cx from 'classnames/bind';
import { Row, Col, Button, Icon } from 'antd';

import React from 'react';
import PropTypes from 'prop-types';

import { secondsToHms } from '../../utils/commonUtils';

const RaceListItem = ({ event, meetingName, onRaceClick, now }) => (
  <Row
    type="flex"
    align="middle"
    className={styles.row}
    onClick={onRaceClick(event.id, event.meeting_id)}
  >
    <Col xs={2} sm={1}><div className={cx(styles.icn, icon.bg, icon[event.type + '2'])}></div> </Col>
    <Col xs={14} sm={19}>{ meetingName.toUpperCase()}</Col>
    <Col xs={2} sm={1}><Button type="primary" size="small" className={styles.btn} >R{event.race_num}</Button></Col>
    <Col xs={4} sm={2} style={{ textAlign: "right" }} >{secondsToHms(event.outcome - now)}</Col>
    <Col xs={2} sm={1}><Icon type="right" /></Col>
  </Row>
)


RaceListItem.propTypes = {
  event: PropTypes.object.isRequired,
  meetingName: PropTypes.string.isRequired,
  onRaceClick: PropTypes.func.isRequired,
  now: PropTypes.number.isRequired,
};

export default RaceListItem;
