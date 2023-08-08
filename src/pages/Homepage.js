import React from 'react'
import SearchBar from '../components/SearchBar'
import { useContext } from 'react'

import ShowsContext from '../context/shows/showsContext'
import ListItem from '../components/ListItem'

const Homepage = () => {
  const showsContext=useContext(ShowsContext);
  const {loading, shows}=showsContext;

  return (
    <div className='homepage'>
      <SearchBar />

      {loading ? <h2>Loading...</h2> : 
        <div className='homepage_list'>
            {shows.map(item=> 
              <ListItem key={item.show.id}
                        id={item.show.id}
                        image={item.show.image ? item.show.image.medium: "//images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"}
                        name={item.show.name}
                        rating={item.show.rating.average ? item.show.rating.average : "No rating found"}
              />
            )}
        </div>    
      }
    </div>
  )
}

export default Homepage