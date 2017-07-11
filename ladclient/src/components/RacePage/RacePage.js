import styles from './styles.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MeetingDispBox from '../MeetingDispBox';
import EventSelectBox from '../EventSelectBox';
import EventInfoBox from '../EventInfoBox';
import CompetitorList from '../CompetitorList';

class Next5Page extends Component {
    componentDidMount() {
        // this.props.stopUpdate();
    }

    componentWillUnmount() {
        // this.props.startUpdate();
    }

    componentWillReceiveProps(nextProps) {
        const { event, meeting, competitors, onEventClick } = nextProps;
        if (!this.hasFetchActionSent && event.id && !competitors.length) {
            this.hasFetchActionSent = true;
            onEventClick(event.id, meeting.id)();
        }
    }

    render() {
        const props = this.props;
        return (
            <div>
                <MeetingDispBox {...props} />
                <div className={styles.box}>
                    <EventSelectBox {...props} />
                    <EventInfoBox {...props} />
                </div>
                <CompetitorList {...props} />
            </div>
        );
    }
}

Next5Page.propTypes = {
    event: PropTypes.object.isRequired,
    meeting: PropTypes.object.isRequired,
    competitors: PropTypes.array.isRequired,
    onEventClick: PropTypes.func.isRequired,
    stopUpdate: PropTypes.func.isRequired,
    startUpdate: PropTypes.func.isRequired,
};

export default Next5Page;
