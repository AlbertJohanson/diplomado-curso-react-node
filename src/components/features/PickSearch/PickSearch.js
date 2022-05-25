import React, { useEffect, useState } from 'react'
import splash from "../../api/splash.js";
import { SearchBar } from '../../SearchBar/SearchBar'
import { ImageList } from '../../ImageList/ImageList.js';

export const PickSearch = () => {

    const [picks, setPicks] = useState([]);
    const [term, setTerm] = useState('');

    const onSearchSubmit = (termToSearch) => {
        setTerm(termToSearch)
    }

    useEffect(() => {
        async function getPicks() {
            const response = await splash.get('/search/photos' ,{
                params: { query: term, per_page: 16 },
            });
            setPicks(response.data.results);
        }
        if(term) {
            getPicks();
        }
    }, [term]);

  return (
    <div className='ui container' style={{marginTop: 20}}>
        <SearchBar onSearchSubmit={onSearchSubmit}/>
        <div className='ui divider'></div>
        Found: {picks.length} images
        <ImageList images={picks} />
    </div>
  )
}
