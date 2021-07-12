import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"
import HomePage from '../Homepage/HomePage'
import Loading from '../ResultPage.jsx/Loading'
import Results from '../ResultPage.jsx/Results'

export default function Routing() {
    var query=''
    function queryFetcher(receivedQuery) {
        query=receivedQuery
        console.log(query)
    }
    return (
    <Router>
        <Switch>
            <Route path='/' exact>
            <HomePage queryFetcher={queryFetcher}/>
            </Route>
            <Route path='/loading' exact>
            <Loading/>
            </Route>
            <Route path='/result' exact>
            <Results query={query}/>
            </Route>
        </Switch>
    </Router>
    )
}
