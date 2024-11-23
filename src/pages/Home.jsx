import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const res = await fetch("https://ih-beers-api2.herokuapp.com/beers");
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  console.log(beers.length);

  return (
    <Layout>
      <div className="grid">
        {beers.length
          ? beers.map((beer, index) => (
              <Link to={`/beer/${index + 1}`}>
                <Card key={beer._id} data={beer} />
              </Link>
            ))
          : null}
      </div>
    </Layout>
  );
};

export default Home;
