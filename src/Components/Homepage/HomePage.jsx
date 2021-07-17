import SearchBar from './SearchBar';
import Logo from './Logo';
import  '../../Css/Homepage.css';
import React from 'react'
import { useHistory } from "react-router-dom";
export default function HomePage({queryFetcher}) {
    var query=''
    let history = useHistory();
    function callbackQuery (Receivedquery) {
        query=Receivedquery;
        console.log(query)
        queryFetcher(query);
        console.log(history)
        history.push("/result");
        console.log('pushed')
    }
    
    return (
        <div className='whole'>
            <div className="horizontal">
            <Logo />
            <SearchBar q={query} callbackQuery={callbackQuery}/>
            {/* <SearchButton/> */}
            </div>
        </div>
    )
}
