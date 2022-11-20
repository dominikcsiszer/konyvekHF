import '../App.css';
import '../Admin.css';

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
          <h1 className="section-title">Admin</h1>
          <a href='/book/new' className='new-btn'>Új könyv</a>
        </div>
        <div className="konyvekAdmin">
          {(typeof konyvekData === 'undefined') ? (
            <p>Loading...</p>
          ): (
            <table>
                <thead>
                    <tr className='tr'>
                        <th>#</th>
                        <th>Cím</th>
                        <th>Szerző</th>
                        <th>Műfaj</th>
                        <th>Kiadás</th>
                    </tr>
                </thead>
                <tbody>
                    {konyvekData.map(konyv => <tr>
                        <td>{konyv.book_id}</td>
                        <td>{konyv.title}</td>
                        <td>{konyv.author}</td>
                        <td>{konyv.category}</td>
                        <td>{konyv.published}</td>
                    </tr>)}
                </tbody>
            </table>
          )}
        </div>
      </section>
  );
}

export default Home
