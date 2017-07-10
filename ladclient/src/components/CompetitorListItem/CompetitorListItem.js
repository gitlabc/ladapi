import styles from './styles.css';
import icon from '../../utils/icon.css';
import cx from 'classnames/bind';
import { Row, Col, Button } from 'antd';

import React from 'react';
import PropTypes from 'prop-types';

const CompetitorListItem = ({event, competitor, now }) => (
  <Row
    type="flex"
    align="middle"
    justify="space-around"
    className={styles.row}
  >
    <Col xs={1} sm={1}><div className={cx(styles.icn, icon.bg, icon[event.type + '2'])}></div> </Col>
    <Col xs={8} sm={9}>
      <div className={competitor.eliminated ? styles.normal : styles.eleminated}>
        {competitor.saddle_number}.{competitor.name.toUpperCase()}({competitor.barrier})
      </div>
    </Col>
    <Col xs={8} sm={9}>
      {competitor.apn}
    </Col>
    <Col xs={2} sm={1}>
      <Button type="primary" size="small" className={styles.btn}>{competitor.fixed_win_price}</Button>
    </Col>
    <Col xs={2} sm={1}>
      <Button type="primary" size="small" className={styles.btn}>{competitor.fixed_place_price} </Button>
    </Col>
  </Row>
)

CompetitorListItem.propTypes = {
  event: PropTypes.object.isRequired,
  competitor: PropTypes.object.isRequired,
  now: PropTypes.number.isRequired,
};

export default CompetitorListItem;
