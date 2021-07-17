import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"
import HomePage from '../Homepage/HomePage'
import Loading from '../ResultPage.jsx/Loading'
import Results from '../ResultPage.jsx/Results'

export default function Routing({query,queryFetcherTop}) {
    var query1=''
    function queryFetcher(receivedQuery) {
        query1=receivedQuery
        queryFetcherTop(query1)
        console.log(query1)
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
            <Route path='/result' exact render={()=><Results query={query1}/>} />
        </Switch>
    </Router>
    )
}


