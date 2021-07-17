import React,{useState,useEffect} from 'react'
import ResultBox from './ResultBox'
import '../../Css/ResultBox.css'


export default function Results({query}) {
    // render searchbar component here to make it like google so whenever query changes the results rerender
    console.log(query)
    const [state, setState] = useState([])
    const [Query, setQuery] = useState(query)
    
    useEffect(() => {
        const convertedQuery=getConvertedQuery(Query);
        fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?pageNumber=1&pageSize=10&autoCorrect=true&q="+convertedQuery, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a0f2c33513msh041ec0fce0d1da8p1cf66ejsn23a73b7fcd54",
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
	}
    })
    .then(response => {
        console.log(response);
        return response.json()
    }).then(response=>{
        setState(response.value)
        console.log(response.value)
    })
    .catch(err => {
        console.error(err);
        alert('gone')
    });
        return () => {
            // cleanup
        }
    }, [Query])

    function changeQuery(){
        setQuery(document.getElementById("searchQuery1").value)
        console.log(Query);
    }
    return (
        <div className='horizontal1'>
            <div id="searchform1">
                <input id='searchQuery1' placeholder="Seach Something Here.."></input>
                <button id='btt1' className="searchButton1" onClick={changeQuery} >Search</button>
            </div>
            <div>
                {state.map((result) =>  <ResultBox url={result.url} head={result.title} description={result.body}/>)}
            </div>
        </div>
        
    )
}

function getConvertedQuery(query) {
    let finalQuery=''
    for (const char of query) {
        if (char === ' ')
            finalQuery+='%20'
        else
            finalQuery+=char
    }
    console.log(finalQuery)
    return finalQuery
}

