import React,{useEffect,useState} from 'react'
import Loading from './Loading';
import ResultBox from './ResultBox'
import '../../Css/ResultBox.css'
export default function NewsResults() {
    const [state,setState]=useState([])
    const [pageNumber,setPageNumber]=useState(1)
    useEffect(() => {
        setState([])
        fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=${pageNumber}&pageSize=10&withThumbnails=false&location=in`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a0f2c33513msh041ec0fce0d1da8p1cf66ejsn23a73b7fcd54",
		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
	}
    }).then(response => {
        console.log(response);
        return response.json();
    }).then(response=>{
        setState(response.value)
        console.log(response.value)
    }).catch(err => {
        console.error(err);
        alert('Something went Wrong! Try Again')
    });
        return () => {
            // cleanup
        }
    }, [pageNumber])
    return (
        <div>
            {state.length===0? <Loading/> : state.map((result) =>  <ResultBox url={result.url} head={result.title} description={result.body}/>)}
            <div id='pageNavigation'>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===1 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(1)}>1</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===2 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(2)}>2</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===3 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(3)}>3</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===4 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(4)}>4</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===5 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(5)}>5</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===6 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(6)}>6</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===7 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(7)}>7</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===8 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(8)}>8</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===9 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(9)}>9</button>
                {/* eslint-disable-next-line*/}
                <button className={`pageNumber + ${pageNumber===10 ? ' '+'selected': ' '+'notSelected'}`} onClick={()=>setPageNumber(10)}>10</button>
            </div>
        </div>
    )
}
