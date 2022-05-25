import React, { useState } from 'react'

export const SearchBar = ({onSearchSubmit}) => {

    const [term, setTerm] = useState('');


    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term);
    }

  return (
    <div className='ui segment '>
        <form className='ui form' onSubmit={onFormSubmit}>
            <div className='field'>
                <label>Pick Search</label>
                <input
                 type={'text'}
                 onChange={(e) => setTerm(e.target.value)}
                />
            </div>
        </form>
        
    </div>
  )
}
