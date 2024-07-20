import React from 'react';
import '../../css/Common/SearchBar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
function SearchBar() {
    return (
        <>
        <div className='SearchBar'> 
            <button className='Search_Btn'>Search</button>
            <input type='text' className='Search_Test' placeholder="Search"></input>
            <select className="Search_Sel">
                <option value="all" option='select'>all</option>
                <option value="a">a</option>
                <option value="b" >b</option>
            </select>
        </div>
        </>
    );
}
  
export default SearchBar;