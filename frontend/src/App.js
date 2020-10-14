import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import fetchJsonp from 'fetch-jsonp'

const App = () => {

  const [state, setState] = useState({
    loading: false,
    data: null,
  });

    useEffect(() => {
      setState({ loading: true });
      const api = `https://www.giantbomb.com/api/games/?api_key=8f116a5d612b9c3b8078a16806fadea372c7824e&format=jsonp&json_callback=json_callback`;
      fetchJsonp(api, {
        crossDomain:true,
        method: 'GET',
        jsonpCallback: 'json_callback',
        headers: {'Content-Type':'application/json'}
      })
        .then((res) => res.json())
        .then((data) => {
          setState({ loading: false, data: data});
      });
    }, []);

    useEffect(() => {
        const getAPI = async () => {
        const response = await fetch('http://localhost:8080/');
        const data = await response.json();

        try {
          console.log(data);
          setLoading(false);
          setGame(data);
        } catch(error) {
          console.log(error);
        }
      };
      getAPI();
    },[]);

    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
      <Fragment>
      <header>
      <h1>My Game List</h1>
      <a href="http://localhost:8080/add-game">Add New Game</a>
    </header>

        <div className="container">
              {loading ? (
                  <div>
                  <p>Loading</p>
                  </div>
              ) : (
                  <div className="listContainer">
                      {game.map((data) => (
                          <div key={data._id}>
                          <main>
                              <ul className="game">
                                  <li>
                                      <h1> {data.name}
                                      </h1>
                                  </li>
                                  <li>
                                      <img src={data.image} alt={data.name}/>
                                  </li>
                                  <li>
                                      <a href={'http://localhost:8080/' + data._id}>View Game</a>
                                  </li>
                              </ul>
                              </main>
                          </div>
                      ))}
                  </div>
              )}
          </div>
      </Fragment>
  );
};

export default App;
