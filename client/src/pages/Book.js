import '../Book.css'

import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import Konyv from '../containers/Konyv'

function Book() {
    let {id} = useParams()

    const [konyvekData, setkonyvekData] = useState([{}])

    useEffect(() => {
      fetch('http://localhost:5000/api/konyv/'+id, {
        cache: 'no-cache'
      })
      .then(response => response.json())
      .then(data => setkonyvekData(data))
    },[])

  return (
    <div className='book-header'>
      <div className='book-content'>
        <h1 className='book-title'>{konyvekData[0].title}</h1>
        <h1 className='book-title'>{konyvekData[0].title}</h1>

      </div>
    </div>
    // <Konyv id={konyvekData[0].id} title={konyvekData[0].title} category={konyvekData[0].category} author={konyvekData[0].author} description={konyvekData[0].description} img={konyvekData[0].img} />
  );
}

export default Book
