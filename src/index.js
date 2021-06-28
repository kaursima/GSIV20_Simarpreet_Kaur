import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/list" component={Home} />
                <Route exact path="/details/:movieId" component={MovieDetails} />
            </Switch>
        </Router>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
