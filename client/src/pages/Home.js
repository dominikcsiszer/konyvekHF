import '../App.css';

import Konyv from '../containers/Konyv'

import React, {useEffect, useState} from 'react'

function Home() {
  const [konyvekData, setkonyvekData] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:5000/api/konyvek', {
      cache: 'no-cache'
    })
    .then(response => response.json())
    .then(data => setkonyvekData(data))
  },[])

  return (
      <section className="konyvek-section">
        <div className='header'>
          <h1 className="section-title">Könyvek</h1>
        </div>
        <div className="konyvek">
          {(typeof konyvekData === 'undefined') ? (
            <p>Loading...</p>
          ): (
            konyvekData.map(konyv => <a className='konyvLink' href={'/book/'+konyv.book_id}><Konyv id={konyv.book_id} title={konyv.title} category={konyv.category} author={konyv.author} description={konyv.description} img={konyv.img} /></a>)
          )}
        </div>
      </section>
  );
}

export default Home
