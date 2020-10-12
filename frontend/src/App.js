import React, { Fragment, useEffect, useState } from 'react';
import './App.css';

const App = () => {
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
      <a href="http://localhost:8080">View All Games</a>
      <a href="http://localhost:8080/add-game">Add New Game &#x27A2;</a>
    </header>

        <div className="container">
              {loading ? (
                  <div>Loading</div>
              ) : (
                  <div>
                      {game.map((data) => (
                          <div key={data._id}>
                          <main>
                              <ul className="game">
                                  <li>
                                      <h1> {data.name}
                                      </h1>
                                  </li>
                                  <li>
                                      <img src={data.image} alt={data.name} />
                                  </li>
                                  <li>
                                      <p>{data.description}</p>
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
