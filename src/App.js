import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from "react-router-dom";
import Applicant from './applicant/Applicant';
import Guarantor from './guarantor/Guarantor';
import Home from './home/Home';
import GalleryPage from './gallery/GalleryPage';
import Application from './application/Application';

const App = () => {
    return (
            <Router>
                <h1 style={{
                    backgroundColor: 'rgba(0, 29, 56, 0.8)',
                    color: 'white',
                    padding: '10px 50px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Link to={'/'}>
                        <span style={{color: 'white'}}>Solidarity Collateral</span>
                    </Link>
                    <Link to={'/gallery'} style={{marginTop: '-10px'}}>
                        <span style={{fontSize: '16px', color: 'white'}}>Login</span>
                    </Link>

                </h1>
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
    )
}

export default App;
