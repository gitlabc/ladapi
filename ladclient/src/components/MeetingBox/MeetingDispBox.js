import styles from './styles.css';
// import cx from 'classnames/bind';
import { Row } from 'antd';

import React from 'react';
import PropTypes from 'prop-types';


// <div>{meeting.name} {meeting.type} {meeting.date} {meeting.country}</div>
const MeetingDispBox = ({ meeting }) => (
  <Row type="flex" justify="center" align="middle" gutter={8} className={styles.title}>
    <div>{meeting.name.toUpperCase()}</div>
  </Row>
)

MeetingDispBox.propTypes = {
  meeting: PropTypes.object.isRequired,
}


export default MeetingDispBox;
