import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Next5Page from '../Next5Page';
import RacePage from '../RacePage';


const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Next5Page} />
            <Route path="/race" component={RacePage} />
        </Switch>
    </main>
);

export default Main;
