import SearchBar from './SearchBar';
import Logo from './Logo';
import  '../../Css/Homepage.css';
import React from 'react'
export default function HomePage({queryFetcher}) {
    var query=''
    function callbackQuery (Receivedquery) {
        query=Receivedquery;
        console.log(query)
        queryFetcher(query);
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
