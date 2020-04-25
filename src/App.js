import React from 'react';
import './App.css';
import {Layout} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route, useRouteMatch,
} from "react-router-dom";
import Applicant from './applicant/Applicant';
import Guarantor from './guarantor/Guarantor';
import Home from './home/Home';
import GalleryPage from './gallery/GalleryPage';
import Application from './application/Application';

const App = () => {
    return (
        <Layout style={{minHeight: '100vh', padding: '60px 60px 0'}}>
            <Router>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/applicant">
                        <Applicant />
                    </Route>
                    <Route path="/guarantor">
                        <Guarantor />
                    </Route>
                    <Route exact path="/gallery">
                        <GalleryPage />
                    </Route>
                    <Route path={'/gallery/:id'}>
                        <Application />
                    </Route>
                    <Route>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Layout>
    )
}

export default App;
