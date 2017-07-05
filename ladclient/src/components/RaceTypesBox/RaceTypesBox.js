import styles from './styles.css';
import icon from '../../utils/icon.css';
import cx from 'classnames/bind';
import { Row, Col, Button } from 'antd';

import React from 'react';
import PropTypes from 'prop-types';


const RaceTypesBox = ({ raceTypes, onRaceTypeClick }) => {
  const keys = Object.keys(raceTypes);
  return (
    <Row type="flex" justify="center" gutter={8} className={styles.row}>
      {
        keys.map((key) => (
          <Col span={8} key={key} >
            <Button
              className={cx(styles.btn, icon.bg, icon[key + (raceTypes[key] ? '1' : '2')])}
              type={raceTypes[key] ? 'primary' : 'default'}
              onClick={onRaceTypeClick(key)}></Button>
          </Col>
        ))
      }
    </Row>
  )
}

RaceTypesBox.propTypes = {
  raceTypes: PropTypes.object.isRequired,
  onRaceTypeClick: PropTypes.func.isRequired,
};

export default RaceTypesBox;
