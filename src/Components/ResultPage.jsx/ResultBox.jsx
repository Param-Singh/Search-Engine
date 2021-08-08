import React from 'react'
import '../../Css/ResultBox.css'
export default function ResultBox({url,head,description}) {
    console.log('inresultbox')
    return (
        <div className='cont'>
            <div className='url'>{url}</div>
            {/* eslint-disable-next-line*/}
            <div className='head'><a target='_blank' href={url} style={{textDecoration : 'none'}}>{head}</a></div>
            <div className='description'>{description}</div>
        </div>
    )
}


