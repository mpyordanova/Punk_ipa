import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Home = (props)=>{
  const [apiResponse, setApiResponse]=useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.punkapi.com/v2/beers/random`)
      setApiResponse(response.data)
    }
    fetchData()
  })

  return(
      <div clasName='home'>
        <ul className='beerList'>
          {
            Object.keys(apiResponse).length > 0 ?
            apiResponse.results.map((beer, index) => {
              return (
                <li key= {index} className = 'beer-name'>
                  {beer.name}
                  <img className='Beer' alt="Beer"  src='#' onClick={() =>{
                    props.fetch(beer.url)
                  }}/>

                </li>
              )
            })
            :null
          }
      </ul>
        <button>Select</button>
      </div>
          )
        }

export default Home