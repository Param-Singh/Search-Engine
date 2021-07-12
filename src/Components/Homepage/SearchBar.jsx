import React from 'react'
import  '../../Css/SearchBar.css'
import '../../Css/Homepage.css';
export default function SearchBar({q,callbackQuery}) {
    function sendQuery(){
        const query = document.getElementById("searchQuery").value
        callbackQuery(query)
    }
    return (
        <div id="searchform">
            <input id='searchQuery' placeholder="Seach Something Here.."></input>
            <button id='btt' className="searchButton" onClick={sendQuery}>Search</button>
        </div>
    )
}
