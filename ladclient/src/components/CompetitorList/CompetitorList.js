import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CompetitorListItem from '../CompetitorListItem';

class CompetitorList extends Component {
    render() {
        const { event, competitors } = this.props;
        let now = Math.round((new Date()).getTime() / 1000);
        return (
            <div>
                {
                    competitors.map((competitor) => {
                        return (
                            <CompetitorListItem key={competitor.id} event={event} competitor={competitor} now={now} />
                        )
                    }, this)
                }
            </div>
        );
    }
}

CompetitorList.propTypes = {
    event: PropTypes.object.isRequired,
    competitors: PropTypes.array.isRequired,
};

export default CompetitorList;