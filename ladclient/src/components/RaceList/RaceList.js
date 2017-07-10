import styles from './styles.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RaceListItem from '../RaceListItem';

class RaceList extends Component {
    render() {
        const { eventIds, meetingNames, races, onRaceClick} = this.props;
        let now = Math.round((new Date()).getTime() / 1000);
        return (
            <div className={styles.rl}>
                {
                    eventIds.map((id, index) => {
                        return (
                            <RaceListItem key={id} meetingName={meetingNames[index]} event={races[id]} now={now} onRaceClick={onRaceClick} />
                        )
                    }, this)
                }
            </div>
        );
    }
}

RaceList.propTypes = {
    eventIds: PropTypes.array.isRequired,
    meetingNames: PropTypes.array.isRequired,
    races: PropTypes.object.isRequired,
    startUpdate: PropTypes.func.isRequired,
    stopUpdate: PropTypes.func.isRequired,
    onRaceClick: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default RaceList;