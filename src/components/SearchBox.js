import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search robots'
                onChange={searchChange}
            />
        </div>
    ); //closing bracket for SearchBox return statement
} //end of SearchBox

export default SearchBox;