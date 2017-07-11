import styles from './styles.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RaceListItem from '../RaceListItem';

class RaceList extends Component {
    render() {
        const { top5Events, onRaceClick} = this.props;
        let now = Math.round((new Date()).getTime() / 1000);
        return (
            <div className={styles.rl}>
                {
                    top5Events.map((event) => {
                        return (
                            <RaceListItem key={event.id} event={event} now={now} onRaceClick={onRaceClick} />
                        )
                    }, this)
                }
            </div>
        );
    }
}

RaceList.propTypes = {
    top5Events: PropTypes.array.isRequired,
    onRaceClick: PropTypes.func.isRequired,
};

export default RaceList;