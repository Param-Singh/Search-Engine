import SearchBar from './SearchBar';
import Logo from './Logo';
import  '../../Css/Homepage.css';
import React from 'react'
import SearchButton from './SearchButton';
export default function HomePage() {
    return (
        <div className='whole'>
            <div className="horizontal">
            <Logo />
            <SearchBar/>
            <SearchButton/>
            </div>
        </div>
    )
}
