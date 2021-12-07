import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Greetings investigator, please, tell me more about yourself.</h1>
      <div>
        <Link to="/classic">I'm one of a kind</Link>
        <p>
          This option will take you through the standard Call of Cthulhu
          character creation process
        </p>
      </div>
      <div>
        <Link to="/pointbuy">My training is standard</Link>
        <p>
          The point buy option is a streamlined approach to character creation.
          Best for new players or those unaccustomed to creating tabletop RPG
          characters from scratch
        </p>
      </div>
    </>
  );
};

export default Home;
