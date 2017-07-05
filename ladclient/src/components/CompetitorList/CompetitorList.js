import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CompetitorListItem from '../CompetitorListItem';

class CompetitorList extends Component {
    componentDidMount() {
        this.props.stopUpdate();
    }

    componentWillUnmount() {
        this.props.startUpdate();
    }

    render() {
        const { competitors } = this.props;
        let now = Math.round((new Date()).getTime() / 1000);
        return (
            <ul>
                {
                    competitors.map((competitor) => {
                        return (
                            <CompetitorListItem key={competitor.id} competitor={competitor} now={now} />
                        )
                    }, this)
                }
            </ul>
        );
    }
}

CompetitorList.propTypes = {
    competitors: PropTypes.array.isRequired,
    stopUpdate: PropTypes.func.isRequired,
    startUpdate: PropTypes.func.isRequired,
};

export default CompetitorList;