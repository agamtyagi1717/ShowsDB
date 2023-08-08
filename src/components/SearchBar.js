import React, { useContext } from 'react'
import { useState } from 'react'
import Alert from './Alert';

import ShowContext from '../context/shows/showsContext';
import AlertsContext from '../context/alerts/alertsContext';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");  
  const {searchShows}=useContext(ShowContext);


  const {alert, setAlert} =useContext(AlertsContext);

  const onSearchHandler = (e) =>{
    e.preventDefault();

    if(searchTerm===""){
      setAlert("Please enter show's name", "danger");
    }
    else{
      document.getElementById("searchBar").className='searchbar_onClick';
      // document.body.style.background = 'white';
      searchShows(searchTerm);
    }

  }
  
  return (
    <div className='searchbar' id='searchBar'>
        {alert ? <Alert message={alert.message} type="danger"/> : null}
        <form className='searchBar_form'>
            <input 
                type='text' 
                placeholder='Search keyword(Example: "h", "game")' 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button className='searchBar_button btn' onClick={onSearchHandler}>Search</button>
        </form>
    </div>
  )
}

export default SearchBar