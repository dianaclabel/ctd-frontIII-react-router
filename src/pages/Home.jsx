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

  return (
    <Layout>
      <div className="grid">
        {beers.length
          ? beers.map((beer, i) => (
              <Link
                key={beer._id}
                to={`/beer/${beer._id}`}
                state={{ n: i + 1 }}
              >
                <Card data={beer} />
              </Link>
            ))
          : null}
      </div>
    </Layout>
  );
};

export default Home;
