import {useState, useEffect} from 'react'
import axios from 'axios'
import React from 'react';
import { findDOMNode } from 'react-dom';


function Home() {
  const [data, setData] = useState('');
  // const [image, setImg] = useState('');
  const RandomBeer = () => {
  axios.get("https://api.punkapi.com/v2/beers/random")
  .then((response) => {
  console.log(response.data);
  setData(response.data);
  })
  .catch((error) => {
  console.log(error);
  });
  };

  // const fetchImage = async () => {                   //image for the beers
  //   const res = await fetch (imageUrl);
  //   const 
  // }



  useEffect(() => {      //call the abbove method with useEffect hook
    RandomBeer();
},[]);

const displayData = () => {   //displaying data
  return data ? (
    data.map((data) => {
      return (
        <div className="data" key={data.id}>
          <h2>{data.name}</h2>
      
          {/* <h3><img src={data.home[0].image} alt="image"/></h3> */}
          <h3>{data.description}</h3>
          <h3>Pair it with: {data.food_pairing}</h3>
        </div>
      );
    })
  ) : (
    <h3>No beer</h3>
  );
}
return (
  <>
    {displayData()}
  </>
);
}







// const Home = (props)=>{
//   const [apiResponse, setApiResponse]=useState({})

//   const beerFetch

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const response = await axios.get(`https://api.punkapi.com/v2/beers/random`)
//   //     setApiResponse(response.data)
//   //   }
//   //   fetchData()
//   // })

//   return(
//       <div clasName='home'>
//         {/* <ul className='beerList'>
//           {
//             Object.keys(apiResponse).length > 0 ?
//             apiResponse.results.map((beer, index) => {
//               return (
//                 <li key= {index} className = 'beer-name'>
//                   {beer.name}
//                   <img className='Beer' alt="Beer"  src='#' onClick={() =>{
//                     props.fetch(beer.url)
//                   }}/>

//                 </li>
//               )
//             })
//             :null
//           }
//       </ul>
//         <button>Select</button> */}
        
//       </div>
//         //   )
//         }

export default Home;