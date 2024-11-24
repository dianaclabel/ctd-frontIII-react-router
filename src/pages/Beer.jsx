import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();

  const getBeer = async () => {
    //Deberas completar este fetch con el parametro correspondiente
    const res = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
    const data = await res.json();

    setBeer(data);
  };

  useEffect(() => {
    getBeer();
  }, []);

  console.log(state);

  return (
    <div>
      <h2>Cerveza numero {state?.n}</h2>
      {beer && (
        <div className="card">
          <img src={beer.image_url} alt="beer-detail" />
          <p>{beer.tagline}</p>
          <p>{beer.description}</p>
          <p>{beer.brewers_tips} </p>
        </div>
      )}
      <button>Go back</button>
    </div>
  );
};

export default Beer;
