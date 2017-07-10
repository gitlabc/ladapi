import React from 'react';

import RaceTypesBox from '../RaceTypesBox';
import RaceList from '../RaceList/';

const Next5Page = (props) => (
    <div>
        <RaceTypesBox {...props}/>
        <RaceList  {...props}/>
    </div>
);

export default Next5Page;
