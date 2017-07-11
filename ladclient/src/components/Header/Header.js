import styles from './styles.css';

import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Row, Col, Menu } from 'antd';

const Header = () => (
    <Row type="flex" >
        <Col span={1}>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
            </Menu>
        </Col>
        <Col span={23}>
            <div className={styles.title} >NEXT 5 RACES</div>
        </Col>
    </Row>
);

export default Header;