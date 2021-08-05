import React from 'react'
import  '../../Css/SearchBar.css'
import '../../Css/Homepage.css';
import { useHistory } from "react-router-dom";
export default function SearchBar({q,callbackQuery}) {
    let history = useHistory();
    function sendQuery(){
        const query = document.getElementById("searchQuery").value
        callbackQuery(query)
        console.log('sb')
    }
    function callNewsResults() {
        history.push("/newsResults");
    }
    return (
        <div id="searchform">
            <input id='searchQuery' placeholder="Seach Something Here.."></input>
            <div id='buttonContainer' >
            <button id='btt' className="searchButton" onClick={sendQuery}>Search</button>
            <button id='newsBtn' className="searchButton" onClick={callNewsResults}>Trending News</button>
            </div>
        </div>
    )
}
