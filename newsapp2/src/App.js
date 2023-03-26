import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=a9fbb9bf209742849ee267ccdee754c8'
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles.slice(0, 9));
        setTopStories(res.data.articles.slice(10, 16));
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className='container my-5'>
        <div className='row row-cols-1 row-cols-md-3 g-4 justify-content-center overflow-auto'>
          {news.map((val, index) => {
            return (
              <div key={index} className='col'>
                <div className='card h-100 rounded-0'>
                  <img
                    src={val.urlToImage}
                    className='card-img-top'
                    alt='...'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{val.title}</h5>
                    <p className='card-text'>{val.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='container-fluid row my-5 top-stories'>
          <div className='col'>
            <h3>Top Stories for You</h3>

            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-outline-secondary rounded-pill">All</button>
                <button type="button" className="btn btn-outline-secondary rounded-pill">Android</button>
                <button type="button" className="btn btn-outline-secondary rounded-pill">Cricket</button>
                <button type="button" className="btn btn-outline-secondary rounded-pill">iPhone</button>
              </div>
            </div>

            {topStories.map((val, index) => {
              return (
                <div key={index} className='card mb-3'>
                  <div className='row g-0'>
                    <div className='col-md-4'>
                      <img
                        src={val.urlToImage}
                        className='img-fluid rounded-start'
                        alt='...'
                      />
                    </div>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>{val.title}</h5>
                        <p className='card-text'>{val.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
