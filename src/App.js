import React from 'react'
import Routing from './Components/Router/Routing';

function App() {
  let query=''
  function queryFetcherTop(receivedQuery) {
    query=receivedQuery
    console.log(query)
}
  return (
    <Routing queryFetcherTop={query,queryFetcherTop}/>
  );
}

export default App;
