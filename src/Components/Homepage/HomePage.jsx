import SearchBar from './SearchBar';
import Logo from './Logo';
import  '../../Css/Homepage.css';
import React from 'react'
import { useHistory } from "react-router-dom";
import VoiceRecognisition from './VoiceRecognisition';
import { useState } from 'react';
export default function HomePage({queryFetcher}) {
    var query=''
    let history = useHistory();
    const [VoiceComponentVisibility,setVoiceComponentVisibility]=useState(false);
    function callbackQuery (Receivedquery) {
        query=Receivedquery;
        console.log(query)
        queryFetcher(query);
        console.log(history)
        history.push("/result");
        console.log('pushed')
    }
    
    return (
        <div id='mainPage'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className='whole'>
                <div className="horizontal">
                <Logo />
                <SearchBar q={query} callbackQuery={callbackQuery}/>
                <button className="searchButton" onClick={()=>setVoiceComponentVisibility(!VoiceComponentVisibility)}>Voice Search</button>
                {VoiceComponentVisibility ? <VoiceRecognisition q={query} callbackQuery={callbackQuery}/> : <span></span>}
                </div>
            </div>
        </div>
    )
}
