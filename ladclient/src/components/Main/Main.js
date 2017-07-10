import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Next5Page from '../Next5Page';
import RacePageContainer from '../RacePage';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Next5Page} />
            <Route path="/race" component={RacePageContainer} />
        </Switch>
    </main>
);

export default Main;
