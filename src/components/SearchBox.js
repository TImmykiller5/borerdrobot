import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
	return(
		<div className='pa2'>
		<input type='search' placeholder='search boreeeddd' 
		className='pa3 ba b--green bg-lightest-blue tc'
		onChange={searchChange}/>

		</div>
		);
		
}

export default SearchBox
